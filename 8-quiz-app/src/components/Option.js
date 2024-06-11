function Option({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <>
      <ul>
        {question.options.map((option, index) => (
          <div key={index}>
            <button
              onClick={() => dispatch({ type: "answered", payload: index + 1 })}
              disabled={hasAnswered}
            >
              {option}
            </button>
            {answer !== null &&
              (index + 1 === question.correctOption ? "Correct" : "Incorrect")}
          </div>
        ))}
      </ul>
    </>
  );
}
export default Option;
