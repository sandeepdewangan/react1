import { useEffect, useReducer } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import Summary from "./components/Summary";
import RestartButton from "./components/RestartButton";
import Timer from "./components/Timer";

// to use reducer we need reducer function and initial state.
const initialState = {
  questions: [],
  // looading, error, ready, active, finished
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  remainingSeconds: 120,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFetchFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
      };
    case "answered":
      const question = state.questions.at(state.index);

      return {
        ...state,
        answer: action.payload,
        points:
          question.correctOption === action.payload
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };

    case "tick":
      return {
        ...state,
        remainingSeconds: state.remainingSeconds - 1,
        status: state.remainingSeconds === 0 ? "finished" : state.status,
      };

    case "finished":
      return { ...state, status: "finished" };

    case "restart":
      return {
        ...initialState,
        status: "ready",
        questions: state.questions,
      };

    default:
      throw new Error("Unknown action");
  }
}

function App() {
  const [
    { questions, status, index, answer, points, remainingSeconds },
    dispatch,
  ] = useReducer(reducer, initialState);

  // derived state
  const numQuestions = questions.length;
  const maxPoints = questions.reduce(
    (totalPoints, current) => totalPoints + current.points,
    0
  );

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((e) => dispatch({ type: "dataFetchFailed" }));
  }, []);

  return (
    <div className="App">
      <Header
        index={index}
        numQuestions={numQuestions}
        points={points}
        maxPoints={maxPoints}
        status={status}
      />
      <Main>
        {status === "loading" && <Loader />} {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Question
              question={questions[index]}
              answer={answer}
              dispatch={dispatch}
            />
            <Timer dispatch={dispatch} remainingSeconds={remainingSeconds} />
            <NextButton
              dispatch={dispatch}
              answer={answer}
              isFinish={numQuestions === index + 1}
            />
          </>
        )}
        {status === "finished" && (
          <>
            <Summary
              sumamryText={`Your total score is ${points} out of ${maxPoints}`}
            />
            <RestartButton dispatch={dispatch} />
          </>
        )}
      </Main>
    </div>
  );
}

export default App;
