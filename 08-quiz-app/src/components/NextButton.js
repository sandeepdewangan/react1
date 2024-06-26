function NextButton({ dispatch, answer, isFinish }) {
  if (answer === null) return;
  return (
    <>
      <button
        onClick={() =>
          dispatch({ type: !isFinish ? "nextQuestion" : "finished" })
        }
      >
        {!isFinish ? "Next" : "Finish"}
      </button>
    </>
  );
}
export default NextButton;
