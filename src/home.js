import React, { Component } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Route from "react-router-dom/Route";
import About from "./about";
import Term from "./about";
import Contact from "./about";
import "./css/Custom.css";

function Home({ match }) {
  return <h2> This is Home page component {match.params.aboutParms} </h2>;
}
function Manu() {
  return (
	<div className="Custom">	
  <div className="header">
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
              <li><a href="#">Bollywood Actor</a></li>
              <li><a href="#">Bollywood Actress</a></li>
              <li><a href="#">Hollywood Actor</a></li>
              <li><a href="#">Hollywood Actress</a></li>
              <li><a href="#">Male Singer</a></li>
              <li><a href="#">Female Singer</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="middle full-wdth clearfix">
  <div className="container">
    <div className="btn-box2"> <a className="btn1 animateBtn1" href="#">Taskbar 1</a> <a className="btn2 animateBtn2" href="#">Taskbar 2</a> <a className="btn3 animateBtn3" href="#">Taskbar 3</a> </div>
  
    <div className="dtl-box full-wdth clearfix">
      <div className="tagline">Taskbar 1</div>
      <div className="full-wdth clearfix info-box">
        <ul>
          <li>
            <a href="#" className="../../img-box"><img src="../../img/img2.png" alt="" /></a>
            <a href="#" className="nm"><span>Bollywood Actor</span></a> </li>
          <li>
            <a href="#" className="../../img-box"><img src="../../img/img3.png" alt="" /></a>
            <a href="#" className="nm"><span>Bollywood Actress</span></a> </li>
          <li>
            <a href="#" className="../../img-box"><img src="../../img/img4.png" alt="" /></a>
            <a href="#" className="nm"><span>Hollywood Actor</span></a> </li>
          <li>
            <a href="#" className="../../img-box"><img src="../../img/img5.png" alt="" /></a>
            <a href="#" className="nm"><span>Hollywood Actress</span></a> </li>
          <li>
            <a href="#" className="../../img-box"><img src="../../img/img6.png" alt="" /></a>
            <a href="#" className="nm"><span>Female Singer</span></a> </li>
          <li>
            <a href="#" className="../../img-box"><img src="../../img/img7.png" alt="" /></a>
            <a href="#" className="nm"><span>Male Singer<br/>
            (Women)</span></a> </li>
        </ul>
      </div>
    </div>
  </div>
</div>
<div className="home-footer">
  <div className="container">
    <div className="ftr-menu">
      <ul>
	           <Router>
      <Route path="/home/:homeParms" exact strict component={Home}></Route>
	  <Route path="/about/:aboutParms" exact strict component={About}></Route>
	   <Route path="/term-condition" exact strict component={Term}></Route>
	    <Route path="/contact-us" exact strict component={Contact}></Route>
      <ul>
		<li><NavLink to="/home/abc">Home</NavLink></li>
		<li><NavLink to="/about/aboutme">About Us</NavLink></li>
		<li><NavLink to="/term-condition">Terms &amp; Conditions</NavLink></li>
		<li><NavLink to="/contact-us">Contact Us</NavLink></li>
	  </ul> 
    </Router>
      </ul>
    </div>
    <div className="copyright">All Rights Reserved &copy; 2016 | Romantic Videoz</div>
  </div>
</div>
</div>

  );
}

export default Manu;
