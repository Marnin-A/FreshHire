import styles from "./BlogPointCard.module.css";
export default function BlogPointCard({ number, header, text }) {
  return (
    <li className={styles.blog_point_card}>
      <div id={styles.number}>{number}</div>
      <div id={styles.info}>
        <h3 id={styles.header}>{header}</h3>
        <p id={styles.text}>{text}</p>
      </div>
    </li>
  );
}
