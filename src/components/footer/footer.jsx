import React from "react";
import styles from "../footer/footer.module.css";
import Logo from "../../assets/Fresh_hire_light.png";
import LadyImg from "../../assets/keeping-eye-you-trusting-watching-staying-alert-vigilant1.webp";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.subscribe}>
        <div className={styles.subscribe_left}>
          <div className={styles.subscribe_text}>
            Subscribe To Get Instant Job Alerts In Your Email Box
          </div>
          <div className={styles.add_email}>
            <input
              id={styles.add_email}
              type="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              placeholder="Enter Email"
            />
            <button className={styles.subscribe_btn}>Subscribe</button>
          </div>
        </div>
        <div className={styles.subscribe_right}>
          <img id={styles.LadyImg} src={LadyImg} alt="" />
        </div>
      </div>
      <div className={styles.footer_bottom}>
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
    </div>
  );
}
