import React from "react";
import SearchIcon from "../../assets/searchImg.png";
import ArrowDown from "../../assets/arrow-down.png";
import ArrowUp from "../../assets/arrow-up.png";
import EmployeeImg1 from "../../assets/employeeImg1.png";
import EmployeeImg2 from "../../assets/employeeImg2.png";
import EmployeeImg3 from "../../assets/employeeImg3.png";
import EmployeeImg4 from "../../assets/employeeImg4.png";
import EmployeeImg5 from "../../assets/employeeImg5.png";
import EmployeeImg6 from "../../assets/employeeImg6.png";
import EmployerImg1 from "../../assets/employerImg1.png";
import EmployerImg2 from "../../assets/employerImg2.png";
import EmployerImg3 from "../../assets/employerImg3.png";
import EmployerImg5 from "../../assets/employerImg5.png";
import EmployerImg6 from "../../assets/employerImg6.png";

import styles from "./ContactUs.module.css";

export default function ContactUs() {
  return (
    <div className={styles.contactUs}>
      <div className={styles.search_topic}>
        <h2 id={styles.search_topic_text}>How can we help today?</h2>
        <div id={styles.search_topic}>
          <img src={SearchIcon} alt="" />
          <input
            type="text"
            placeholder="Enter your topic help topic here"
            pattern="[^<->]"
          />
          <button>Search</button>
        </div>
      </div>
      <section className={styles.employee_help}>
        <div className={styles.employee_help_top}>
          <h3 id={styles.employee_help_header}>Employee help section </h3>
          <div>
            <span>
              Not an <span>employee?</span> scroll down for employer view
            </span>
            <img
              src={ArrowDown}
              alt="Scroll down to employee view if your not and employer"
            />
          </div>
        </div>
        <div className={styles.employee_help_bottom}>
          <div>
            <HelpCard header="Getting Started" img={EmployeeImg1} />
            <HelpCard header="FAQ" img={EmployeeImg2} />
            <HelpCard header="Email and Alert" img={EmployeeImg3} />
            <HelpCard header="Privacy policy" img={EmployeeImg4} />
            <HelpCard header="Review write and edit" img={EmployeeImg5} />
            <HelpCard header="Job Search Tips" img={EmployeeImg6} />
          </div>
        </div>
      </section>
      <section className={styles.employee_help}>
        <div className={styles.employer_help_top}>
          <h3 id={styles.employee_help_header}>Employer help section </h3>
          <div>
            <span>
              Not an <span>employer?</span> scroll up for employee view
            </span>
            <img
              src={ArrowUp}
              alt="Scroll down to employee view if your not and employer"
            />
          </div>
        </div>
        <div className={styles.employee_help_bottom}>
          <div>
            <HelpCard header="Fresh hire rules basics" img={EmployerImg1} />
            <HelpCard header="Employer FAQ" img={EmployerImg2} />
            <HelpCard
              header="Employer profileand onboarding"
              img={EmployerImg3}
            />
            <HelpCard header="Manage Companyreview" img={EmployeeImg4} />
            <HelpCard header="Job Posting" img={EmployerImg5} />
            <HelpCard header="Privacy Policy" img={EmployerImg6} />
          </div>
        </div>
      </section>
    </div>
  );
}
function HelpCard({ header, img }) {
  return (
    <div className={styles.help_card}>
      <h4 id={styles.help_card_header}>{header}</h4>
      <img src={img} alt="" />
    </div>
  );
}
