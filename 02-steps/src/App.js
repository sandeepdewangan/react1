import { useState } from "react";
import "./App.css";

const message = [
  "A React is good framework",
  "A React is nice",
  "A React is awesome",
];

export default function App() {
  const [step, setState] = useState(1);

  function handlePreviousBtnClick() {
    if (step > 1) setState((steo) => step - 1);
  }
  function handleNextBtnClick() {
    if (step < 3) setState((steo) => step + 1);
  }

  return (
    <div className="container">
      <span className={step >= 1 ? "round active" : "round"}>1</span>
      <span className={step >= 2 ? "round active" : "round"}>2</span>
      <span className={step >= 3 ? "round active" : "round"}>3</span>

      <p>{message[step - 1]}</p>

      <button onClick={handlePreviousBtnClick}>previous</button>
      <button onClick={handleNextBtnClick}>next</button>
    </div>
  );
}
