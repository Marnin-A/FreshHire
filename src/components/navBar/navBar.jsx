import React from "react";
import styles from "./navBar.module.css";
import Logo from "../../assets/Fresh_hire.png";

export default function NavBar() {
  return (
    <div className={styles.nav_Bar}>
      <div className={styles.logo}>
        <img src={Logo} alt="Site Logo" />
      </div>
      <div className={styles.nav_Links}>
        <a href="#">Home</a>
        <a href="#">About us</a>
        <a href="#">Contact us</a>
        <a href="#">Post a job</a>
        <a href="#">Job listings</a>
      </div>
      <div className={styles.signup_area}>
        <button>Sign up</button>
        <button>Employer zone</button>
      </div>
    </div>
  );
}
