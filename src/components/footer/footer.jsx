import React from "react";
import styles from "../footer/footer.module.css";
import Logo from "../../assets/Fresh_hire_light.png";
import facebook from "../../assets/facebookLogo.svg";
import instagram from "../../assets/instaLogo.svg";
import twitter from "../../assets/twitterLogo.svg";
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
            <ul>
              <div className={styles.footer_right_header}>Jobs</div>
              <a href="/FreshHire/job_listing">Remote jobs</a>
              <a href="/FreshHire/job_listing">Onsite</a>
              <a href="/FreshHire/job_listing">Developer jobs</a>
            </ul>
            <ul>
              <div className={styles.footer_right_header}>About Us</div>
              <a href="/FreshHire/about">Remote jobs</a>
              <a href="/FreshHire/about">Onsite</a>
              <a href="/FreshHire/about">Developer jobs</a>
            </ul>
            <ul>
              <div className={styles.footer_right_header}>For Employer</div>
              <a href="/FreshHire/contact_us">Remote jobs</a>
              <a href="/FreshHire/contact_us">Onsite</a>
              <a href="/FreshHire/contact_us">Developer jobs</a>
            </ul>
            <ul>
              <div className={styles.footer_right_header}>Contact Us</div>
              <a href="08068792345">08068792345</a>
              <div className={styles.follow_us}>
                <p>Follow us:</p>
                <div className={styles.social_media}>
                  <a href="https://facebook.com/">
                    <img src={facebook} alt="" />
                  </a>
                  <a href="https://instagram.com/">
                    <img src={instagram} alt="" />
                  </a>
                  <a href="https://twitter.com/">
                    <img src={twitter} alt="" />
                  </a>
                </div>
              </div>
            </ul>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}
