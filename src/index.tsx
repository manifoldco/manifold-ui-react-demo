import React from "react";
import ReactDOM from "react-dom";
import { defineCustomElements } from "@manifoldco/ui/dist/loader";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Set API token
if (process.env.REACT_APP_MANIFOLD_API_TOKEN)
  localStorage.setItem(
    "manifold_api_token",
    process.env.REACT_APP_MANIFOLD_API_TOKEN
  );

ReactDOM.render(<App />, document.getElementById("root"));
defineCustomElements(window);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
