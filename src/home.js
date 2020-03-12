import React, { Component } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Route from "react-router-dom/Route";
import About from "./about";
function Home({ match }) {
  return <h2> This is Home page component {match.params.aboutParms} </h2>;
}
function Manu() {
  return (
	<div>
	 <Router>
      <Route path="/home/:homeParms" exact strict component={Home}></Route>
	  <Route path="/about/:aboutParms" exact strict component={About}></Route>
      <ul>
		<li><NavLink to="/home/abc">Home</NavLink></li>
		<li><NavLink to="/about/aboutme">About Us</NavLink></li>
	  </ul>
	  
	  
    </Router>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
  );
}

export default Manu;
