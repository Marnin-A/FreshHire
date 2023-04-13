import { React, useState, useEffect } from "react";
import chevron from "../../assets/chevron.svg";
import styles from "./jobListingSidebar.module.css";
export default function JobListingSidebar() {
  const randomStuff = [
    "Full Time Jobs",
    "Part Time Jobs",
    "Remote Jobs",
    "Internships",
  ];
  return (
    <div className={styles.jobListingSidebar}>
      <div>
        <ToggleMenu title="Job Types" options={randomStuff} />
      </div>
    </div>
  );
}
function ToggleMenu({ title, options }) {
  const [toggle, setToggle] = useState(false);
  const [isChecked, setChecked] = useState(false);

  //  Toggle styling
  const style = {
    transform: toggle ? "rotate(180deg)" : "rotate(0)",
    transition: "transform 150ms ease", // smooth transition
  };
  const checkBoxStyle = { backgroundColor: isChecked ? "#0f5e36" : "white" };
  const visible = {
    contentVisibility: !toggle ? "hidden" : "visible",
  };
  return (
    <div className={styles.toggleMenu}>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
        className={styles.toggleMenu_btn}
      >
        <h3>{title}</h3>
        <img src={chevron} style={style} className={styles.chevron} />
      </button>
      <div style={visible}>
        <label htmlFor="editorial" className={styles.checkLabel}>
          <div
            onClick={() => {
              setChecked(!isChecked);
            }}
          >
            <input
              type="checkbox"
              name="editorial"
              id="editorial"
              className={styles.checkBox}
            />
          </div>
          Editorial
        </label>
      </div>
    </div>
  );
}
