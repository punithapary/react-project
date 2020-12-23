import React, { Component } from "react";
import {Link } from "react-router-dom";


class HeaderMenu extends Component {

  render() {

      return (
        <div className="header">
            <div className="bloglogo"> 
            </div>
            <div className="blogtitle">React Blog</div>
            <div className="navigation">
              <ul className="App-header"> 
              <li> 
                <Link to="Welcome">Home</Link> 
                </li> 
                <li> 
                <Link to="Aboutus">About Us</Link> 
                </li> 
                <li> 
                <Link to="blog">Blog</Link> 
                </li>
                <li> 
                <Link to="Contactus">Contact Us</Link> 
                </li>
                <li> 
                <Link to="Register">Register</Link> 
                </li> 
                <li> 
                <Link to="Login">Login</Link> 
                </li> 
              </ul>
            </div>
      </div>
      );    
  }
}

export default HeaderMenu;
