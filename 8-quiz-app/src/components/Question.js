import "./Question.css";
import Option from "./Option";

function Question({ question, dispatch, answer }) {
  return (
    <div>
      <h1>{question.question}</h1>
      <Option question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}
export default Question;
