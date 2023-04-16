import { React, useState } from "react";
import styles from "./ToggleMenu.module.css";
import chevron from "../../assets/chevron.svg";
import ToggleItem from "../toggleItem/ToggleItem";

export default function ToggleMenu({ title, options }) {
  const [toggle, setToggle] = useState(false);

  //  Toggle styling
  const style = {
    transform: toggle ? "rotate(180deg)" : "rotate(0)",
    transition: "transform 150ms ease", // smooth transition
  };

  const visible = {
    contentVisibility: !toggle ? "hidden" : "visible",
    marginTop: "10%",
    marginLeft: "5%",
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
        {options.map((item) => (
          <ToggleItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
