import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

const PREFIX = "/react";

const withPrefix = (path) => `${PREFIX}${path}`;

class App extends React.Component {
  render() {
    return (
      <Router>
        <h2>React Application Microfront with Routes</h2>
        <div>
          <nav>
            <ul>
              <li>
                <Link to={withPrefix("/")}>Home</Link>
              </li>
              <li>
                <Link to={withPrefix("/about")}>About</Link>
              </li>
              <li>
                <Link to={withPrefix("/users")}>Users</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path={withPrefix("/about")}>
              <About />
            </Route>
            <Route path={withPrefix("/users")}>
              <Users />
            </Route>
            <Route path={withPrefix("/")}>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

class AppElement extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<App />, this);
  }
}

customElements.define("app-react", AppElement);
