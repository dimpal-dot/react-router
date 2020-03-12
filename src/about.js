import React, { Component } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Route from "react-router-dom/Route";

function About({ match }) {
  return <h2> This is in about component {match.params.aboutParms} </h2>;
}
function Manu() {
  return (
    <Router>
      <Route path="/about/:aboutParms" exact strict component={About}></Route>
      <NavLink to="/about/abc">About</NavLink>
    </Router>
  );
}

export default Manu;
