import React from "react";
import styles from "./navBar.module.css";
import Logo from "../../assets/Fresh_hire.png";

import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className={styles.nav_Bar}>
      <div className={styles.logo}>
        <img src={Logo} alt="Site Logo" />
      </div>
      <div className={styles.nav_Links}>
        <Link to="FreshHire/">Home</Link>
        <Link to="FreshHire/about">About us</Link>
        <Link to="FreshHire/contact_us">Contact us</Link>
        <Link to="FreshHire/post_job">Post a job</Link>
        <Link to="#">Job listings</Link>
      </div>
      <div className={styles.signup_area}>
        <button>Sign up</button>
        <button>Employer zone</button>
      </div>
    </div>
  );
}
