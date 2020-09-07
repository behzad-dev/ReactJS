import React from "react";
import Homepage from "./components/Homepage";
import HelloWorld from "./components/HelloWorld";
import Welcome from "./components/Props";
import State_lifecycle from "./components/State_lifecycle";
import Eventhandling from "./components/Eventhandling";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom"; //npm install react-router-dom , we use this to route between pages
import "./App.css";
const App = () => {
  return (
    <Router>
      <div>
        <div className="bNavbar">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/HelloWorld">HelloWorld</Link>
              </li>
              <li>
                <Link to="/Props">Props</Link>
              </li>
              <li>
                <Link to="/State_lifecycle">State_lifecycle</Link>
              </li>
              <li>
                <Link to="/Eventhandling">Eventhandling</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/HelloWorld" component={HelloWorld} />
          <Route path="/Props">
            <Welcome name="My props from another Page" />
          </Route>
          <Route path="/State_lifecycle" component={State_lifecycle} />
          <Route path="/Eventhandling" component={Eventhandling} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
