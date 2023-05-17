import React, { useState } from "react";
// import styles from "./navBar.module.css";
import "./navBar.css";
import Logo from "../../assets/Fresh_hire.png";
import Hamburger from "../../assets/hamburger_menu.png";

import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [scroll, setScroll] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const addBoxShadow = () => {
    if (window.scrollY >= 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", addBoxShadow);

  return (
    <div className={scroll ? "header onScroll" : "header"}>
      <div className="logo">
        <img
          src={Logo}
          alt="FreshHire Logo"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        />{" "}
        Freshire
      </div>
      <ul
        className={click ? "nav-menu active" : "nav-menu"}
        onClick={handleClick}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact_us">Contact Us</Link>
        </li>
        <li>
          <Link to="/post_job">Post a job</Link>
        </li>
        <li>
          <Link to="/job_listing">Job Listings</Link>
        </li>
        <li className="signup_area_resp">
          <div className="signup_area">
            <button>Sign up</button>
          </div>
        </li>
      </ul>
      <div className="signup_area hide">
        <button>Sign up</button>
      </div>
      <div className="hamburger" onClick={handleClick}>
        {click ? <p>X</p> : <img src={Hamburger} alt="" />}
      </div>
    </div>
  );
}
