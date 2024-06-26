import { useEffect } from "react";

function Timer({ dispatch, remainingSeconds }) {
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      // clean up, after un mounting of Timer
      return () => clearInterval(id);
    },
    [dispatch]
  );

  return <h2>Timer: {remainingSeconds} </h2>;
}
export default Timer;
