import React, { Component } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Route from "react-router-dom/Route";
import Home from "./home";

function About({ match }) {
  return <h2> This is in about component {match.params.aboutParms} </h2>;
}
function Login({ match }) {
  return <h2> This is Login component</h2>;
}
function Register({ match }) {
  return <h2> This is register component </h2>;
}
function Manu() {
  return  ( 
	<div className="Custom">
<div className="header inner_header">
  <div className="container"> <a className="pull-left logo" href="index.html"><img src="../../img/logo.png" alt="" /></a>
    <div className="pull-right rt-box">
      <div className="pull-left srch-box">
        <input type="text" placeholder="FIND YOUR HEART THROB..." className="inpt" />
      </div>
      <div className="pull-left scl-box"> <a href="#"><img src="../../img/fb.png" alt="" /></a> <a href="#"><img src="../../img/tw.png" alt="" /></a> <a href="#"><img src="../../img/gplus.png" alt="" /></a> </div>
      <div className="pull-right nav-box"> <a className="signin-btn pull-left" href="#"> <i className="fa fa-user"></i> Sign In <i className="fa fa-chevron-left"></i> </a> <a className="pull-left nav-icon" href="javascript:void(0);"> <span className="line1"></span> <span className="line2"></span> <span className="line3"></span> </a>
        <div className="sidenav">
          <div className="menu">
            <ul className="clearfix">
              <li><a href="#">Romantic Men</a></li>
              <li><a href="#">Romantic Women</a></li>
              <li><a href="#">Romantic Men With Foreign Accents</a></li>
              <li><a href="#">Romantic Women With Foreign Accents</a></li>
              <li><a href="#">Sing me a song (Men)</a></li>
              <li><a href="#">Sing me a song (Women)</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="middle full-wdth login-sec clearfix">
  <div className="container">
   <div className="login_box clearfix">
     <h2 className="hd">About Us</h2>
     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
     <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
     <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
     <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
     <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
     
    </div>
   </div>
    
  </div>
<div className="home-footer">
  <div className="container">
    <div className="ftr-menu">
              <Router>
      <Route path="/home/:homeParms" exact strict component={Home}></Route>
	  <Route path="/about/:aboutParms" exact strict component={About}></Route>
      <ul>
		<li><NavLink to="/home/abc">Home</NavLink></li>
		<li><NavLink to="/about/aboutme">About Us</NavLink></li>

	  </ul> 
    </Router>
    </div>
    <div className="copyright">All Rights Reserved &copy; 2016 |  Demo</div>
  </div>
</div>
</div>
);
}

export default Manu;
