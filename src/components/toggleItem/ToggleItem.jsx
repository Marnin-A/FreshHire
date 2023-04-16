import { React, useState } from "react";
import styles from "./ToggleItem.module.css";
import tick from "../../assets/tickGreen.png";
export default function ToggleItem({ item }) {
  const [isChecked, setChecked] = useState(false);

  const checkBoxStyle = {
    backgroundImage: isChecked ? `url(${tick})` : "none",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className={styles.checkLabel}>
      <span
        onClick={() => {
          setChecked(!isChecked);
        }}
        style={checkBoxStyle}
        className={styles.checkBox}
      />
      <span>{item.title}</span>
      <span>78+</span>
    </div>
  );
}
