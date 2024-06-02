import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// React.StrictMode will run the script twice to check if any bug exists.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
