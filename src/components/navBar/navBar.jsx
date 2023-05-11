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
        <Link to="FreshHire/">Home</Link>
        <Link to="FreshHire/about">About us</Link>
        <Link to="FreshHire/contact_us">Contact us</Link>
        <Link to="FreshHire/post_job">Post a job</Link>
        <Link to="FreshHire/job_listing">Job listings</Link>
      </div>
      <div className={styles.signup_area}>
        <button>Sign up</button>
      </div>
    </div>
  );
}
