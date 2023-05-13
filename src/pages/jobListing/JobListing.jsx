import React from "react";
import styles from "./JobListing.module.css";
import JobListingFilters from "../../components/jobListingFilters/JobListingFilters";
import JobListingSidebar from "../../components/jobListingSideBar/JobListingSidebar";
import JobListingBody from "../../components/jobListingBody/JobListingBody";

export default function JobListing() {
  return (
    <div className={styles.jobListing}>
      <div>
        {/* <JobListingFilters /> */}
      </div>
      <div className={styles.jobListing_main}>
        <JobListingSidebar />
        <JobListingBody />
      </div>
    </div>
  );
}
