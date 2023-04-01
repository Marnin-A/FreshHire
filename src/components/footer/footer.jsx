import React from "react";
import styles from "../footer/footer.module.css";
import Logo from "../../assets/Fresh_hire_light.png";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_details}>
        <div className={styles.footer_left}>
          <img src={Logo} alt="Site Logo" />
          <div>
            Upload your resume and other required docs to find best jobs that
            match you.
          </div>
        </div>
        <div className={styles.footer_right}>
          <nav>
            <div>Jobs</div>
            <a href="#">Remote jobs</a>
            <a href="#">Onsite</a>
            <a href="#">Developer jobs</a>
          </nav>
          <nav>
            <div>About Us</div>
            <a href="#">Remote jobs</a>
            <a href="#">Onsite</a>
            <a href="#">Developer jobs</a>
          </nav>
          <nav>
            <div>For Employer</div>
            <a href="#">Remote jobs</a>
            <a href="#">Onsite</a>
            <a href="#">Developer jobs</a>
          </nav>
          <nav>
            <div>Contact Us</div>
            <a href="#">Remote jobs</a>
            <a href="#">Onsite</a>
            <a href="#">Developer jobs</a>
          </nav>
        </div>
      </div>
      <hr />
    </div>
  );
}
