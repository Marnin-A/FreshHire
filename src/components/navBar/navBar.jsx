import React from "react";
import styles from "./navBar.module.css";
import Logo from "../../assets/Fresh_hire.png";
import LogoText from "../../assets/Fresh_hire_light.png";

import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className={styles.nav_Bar}>
      <div className={styles.logo}>
        <img src={Logo} alt="Site Logo" />
        Freshire
      </div>
      <div className={styles.nav_Links}>
        <Link to="/">Home</Link>
        <Link to="/about">About us</Link>
        <Link to="/contact_us">Contact us</Link>
        <Link to="/post_job">Post a job</Link>
        <Link to="/job_listing">Job listings</Link>
      </div>
      <div className={styles.signup_area}>
        <button>Sign up</button>
      </div>
    </div>
  );
}
