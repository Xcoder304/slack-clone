import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import "./App/Styles/index.css";
import Context from "./App/context/Context";
import { initailstate, reducer } from "./App/context/reducer";

ReactDOM.render(
  <React.StrictMode>
    <Context initailstate={initailstate} reducer={reducer}>
      <App />
    </Context>
  </React.StrictMode>,
  document.getElementById("root")
);
