import { React } from "react";
import ToggleMenu from "../toggleMenu/ToggleMenu";
import { JobTypes } from "../../data/data";
import { ExperienceLevels } from "../../data/data";
import { Salary } from "../../data/data";
import styles from "./jobListingSidebar.module.css";
export default function JobListingSidebar() {
  return (
    <div className={styles.jobListingSidebar}>
      <ToggleMenu title="Job Types" options={JobTypes} />
      <ToggleMenu title="Experience Level" options={ExperienceLevels} />
      <ToggleMenu title="Salary" options={Salary} />
    </div>
  );
}
