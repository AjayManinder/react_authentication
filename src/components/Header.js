import React from "react";

import {useNavigate} from "react-router-dom";
import "./Nav.css";
import Main_img from "../images/Main_img.jpeg";
import Footer from "./Footer";

const Header = () => {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    
    navigate('/Login');
  };
  return (
    <><header className="header">
      <img className="Head-img" alt="header" src={Main_img}></img>
      <a href="/" className="brand-name">Hamilton lakes

        Swim and Tennis
      </a>
      <div
        className="navigation-menu">
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>

      </div>
      <button onClick={navigateToLogin} className="button-head">LOGIN</button>
    </header><Footer /></>
  );
};

export default Header;
