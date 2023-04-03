import React from "react";
import styles from "./about.module.css";
import UsersImg from "../../assets/Component3.png";
import Logo from "../../assets/Fresh_hire.png";
import StatsImg from "../../assets/Frame154.png";

export default function About() {
  return (
    <div className={styles.about}>
      <section className={styles.explore}>
        <div className={styles.explore_header}>
          About {"\u00A0"} <img src={Logo} alt="" />
        </div>
        <div className={styles.explore_body}>
          <div className={styles.explore_body_left}>
            <h3>Welcome to Fresh Hire,</h3>
            <p>
              the job platform designed specifically for fresh graduates and
              employers seeking to connect with them. We understand that finding
              a job after graduation can be challenging, which is why we've
              created a platform that helps bridge the gap between job seekers
              and potential employers.
            </p>
            <p>
              For job seekers, Fresh Hire offers an easy-to-use platform to
              search for job opportunities based on their qualifications,
              experience, and interests. We work with top employers in a variety
              of industries to bring you the latest job openings, internships,
              and entry-level positions. Our job search tool is designed to make
              the job hunting process efficient and stress-free.
            </p>
            <p>
              For employers, Fresh Hire provides a platform to find the best and
              brightest young talent. We know how important it is to find the
              right employees to help grow your business, which is why we only
              work with top-quality candidates who are committed to success. Our
              user-friendly job posting system allows you to quickly and easily
              advertise job openings to our network of qualified job seekers.
            </p>
            <p>
              At Fresh Hire, our mission is to create a seamless connection
              between job seekers and employers, and to help young professionals
              kickstart their careers. We believe that every graduate deserves a
              fair shot at a fulfilling career, and we're committed to helping
              you achieve your goals.
            </p>
            <p>
              Thank you for choosing Fresh Hire, and we look forward to working
              with you!
            </p>
          </div>
          <div className={styles.explore_body_right}>
            <img src={StatsImg} alt="Site statistics" />
          </div>
        </div>
        <button className={styles.explore_btn}>Explore more</button>
      </section>
      <section className={styles.difference}>
        <div className={styles.difference_top}>
          <div className={styles.difference_top_header}>
            <span>The </span>
            <span>Fresh </span>
            <span> hire </span>
            <span>Difference</span>
          </div>
        </div>
        <div className={styles.difference_bottom}>
          <div className={styles.difference_bottom_header}>
            <h3>
              Job seekr get the inside scoop, employer hare what makes them
              proud
            </h3>
          </div>
          <div id={styles.users}>
            <img src={UsersImg} alt="Users image" />
          </div>
          <div className={styles.difference_bottom_info}>
            <div className={styles.difference_info}>
              <h3>Reach</h3>
              <p>Stay top of mind with engaged quality candidate</p>
            </div>
            <div className={styles.difference_info}>
              <h3>Influence</h3>
              <p>Tell a persuasive story to engage and have diverse talents</p>
            </div>
            <div className={styles.difference_info}>
              <h3>Listen</h3>
              <p>Uncover actionable insight to drive improvement</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
