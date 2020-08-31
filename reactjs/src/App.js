import React from 'react';
import Homepage from './components/Homepage'
import HelloWorld from './components/HelloWorld'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,NavLink
  } from "react-router-dom"; //npm install react-router-dom , we use this to route between pages
import './App.css';
const  App= () => {
    return   <Router>
    <div >
      <div className="bNavbar">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/HelloWorld">HelloWorld</Link>
          </li>
          </ul>
        </nav>
      </div>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/HelloWorld" component={HelloWorld} />
       {/* this is anotherway */}
         {/* <Route path="/homepage">
          <Homepage />
        </Route>
        <Route path="/">
        </Route>  */}
      </Switch>
    </div>
  </Router>
}
 
export default App;