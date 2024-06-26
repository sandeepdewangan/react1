function StartScreen({ numQuestions, dispatch }) {
  return (
    <div>
      <h1>START REACT QUIZ</h1>
      <p>
        There are {numQuestions} number of questions each carrying 10 points.
      </p>
      <button onClick={() => dispatch({ type: "start" })}>Start</button>
    </div>
  );
}
export default StartScreen;
