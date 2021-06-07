import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return <h2>App Contact Microfront</h2>;
  }
}

class AppElement extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<App />, this);
  }
}

customElements.define("app-contact", AppElement);
