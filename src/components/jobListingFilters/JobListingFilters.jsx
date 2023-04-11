import React from "react";
import SearchImg from "../../assets/searchImg_green.png";
import LocationImg from "../../assets/location.png";
import BriefcaseImg from "../../assets/briefcase.png";
import GraphImg from "../../assets/graphUp.png";
import styles from "./JobListingFilters.module.css";

export default function JobListingFilters() {
  return (
    <div className={styles.jobListingFilters}>
      <Filter option="UI/UX Design" img={SearchImg} />
      <Filter title="Location" option="Abuja,Nigeria" img={LocationImg} />
      <Filter option="Job Type" img={BriefcaseImg} />
      <Filter option="Salary Range" img={GraphImg} />
      <button id={styles.search_btn}>Search Job</button>
    </div>
  );
}
function Filter({ option, img, title }) {
  return (
    <div className={styles.filters}>
      <img src={img} alt="filter icon" />
      <span id={styles.filter_text}>
        {title && <span id={styles.filter_title}>{title}</span>}
        {option}
      </span>
      <button id={styles.cancel_btn}></button>
    </div>
  );
}
