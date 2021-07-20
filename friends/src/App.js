import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";

import './App.css';

function App(props) {

  const logout = () => {

  };

  const isAuth = localStorage.getItem("token");


  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            {!isAuth ? <Link to="/login">Login</Link> : <div></div>}
          </li>

          <li>
            {isAuth ? <Link to="/protected">Protected Page</Link> : <div></div>}
          </li>

          <li>
            <Link onClick={logout}>Logout</Link>
          </li>
        </ul>
        <h1>Testing App</h1>

        <Switch>
          <Route path="/login" component={Login} />
          <Route  component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
