import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + state.step };
    case "dec":
      return { ...state, count: state.count - state.step };
    case "setCounter":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    default:
      throw new Error("Unknown action");
  }
}

export default function DateCounter() {
  const initialState = { count: 0, step: 1 };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  const date = new Date();
  date.setDate(date.getDate() + count);

  function onSliderRangeChange(e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  }
  function incCounter() {
    dispatch({ type: "inc", payload: 1 });
  }
  function decCounter() {
    dispatch({ type: "dec", payload: 1 });
  }

  function onChangeCount(e) {
    dispatch({ type: "setCounter", payload: Number(e.target.value) });
  }

  return (
    <div>
      <input
        type="range"
        min="1"
        max="10"
        defaultValue={step}
        step="1"
        onChange={onSliderRangeChange}
      />
      <label>{step}</label>
      <br />
      <button onClick={decCounter}>–</button>
      <input type="number" value={count} onChange={onChangeCount} />
      <button onClick={incCounter}>+</button>
      <br /> <br />
      <label>{date.toDateString()}</label>
      <br />
      <button>Reset</button>
    </div>
  );
}
