import React from "react";
import styles from "./JobListing.module.css";
import JobListingFilters from "../../components/jobListingFilters/JobListingFilters";

export default function JobListing() {
  return (
    <div className={styles.jobListing}>
      <JobListingFilters />
    </div>
  );
}
