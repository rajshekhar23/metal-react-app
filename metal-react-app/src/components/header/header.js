import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link, 
  NavLink,
  Redirect
} from "react-router-dom";

import logo from '../../images/logo.png';
import { AboutUs } from "../about-us/AboutUs";
import { Home } from "../home/home";

export const Header = () => {
  return (    
        <div className="header">
            <div className="wrap">
                <div className="logo">
                    <a href="index.html"><img src={logo} alt="" /></a>
                </div>
                    <ul className="menu">
                        <li><a href="/">HOME</a></li>
                        <li><a href="/about-us">ABOUT</a></li>
                        <li><a href="services.html">SERVICES</a>  </li>
                        <li><a href="/products">PRODUCTS</a> </li>
                        <li><a href="/contact-us">CONTACT</a> </li>
                        <div id="lavalamp"> </div>
                        <div className="clear"> </div>
                    </ul>                                
                <div className="clear"> </div>
            </div>
            <div className="clear"> </div>
        </div>
  )
}