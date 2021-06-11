import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";

ReactDOM.render(<App />, document.getElementById("root"));

// class AppElement extends HTMLElement {
//     connectedCallback() {
//       ReactDOM.render(<App />, this);
//     }
//   }

//   customElements.define("mfe-react", AppElement);
