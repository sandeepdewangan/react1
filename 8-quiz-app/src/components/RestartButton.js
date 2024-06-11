function RestartButton({ dispatch }) {
  return (
    <>
      <button onClick={() => dispatch({ type: "restart" })}>
        Restart Quiz
      </button>
    </>
  );
}
export default RestartButton;
