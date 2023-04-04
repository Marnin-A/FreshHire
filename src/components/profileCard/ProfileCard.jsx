import React from "react";
import styles from "./ProfileCard.module.css";

export default function ProfileCard({ img, header, text }) {
  return (
    <div className={styles.profile_card}>
      <img src={img} alt="" />
      <div className={styles.profile_card_right}>
        <h3>{header}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
