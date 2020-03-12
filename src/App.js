import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import Route from "react-router-dom/Route";
import Greet from "./Greet";

const User = ({ match }) => {
  return <h1>Welcome user - {match.params.username}</h1>;
};

function App() {
  let permission = {
    accessGranted: false
  };
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <NavLink to="/" exact activeStyle={{ color: "green" }}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" exact activeStyle={{ color: "green" }}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/user/jhon" exact activeStyle={{ color: "green" }}>
              User
            </NavLink>
          </li>
        </ul>
        <input type="button" value="Get Access"></input>
        <Route
          path="/"
          exact
          render={() => {
            return <h1>this is the root</h1>;
          }}
        ></Route>
        <Route
          path="/about"
          exact
          strict
          render={() => {
            return <h1>this is the about</h1>;
          }}
        ></Route>
        <Route path="/user/:username" exact strict component={User}></Route>
      </div>
    </Router>
  );
}

export default App;
