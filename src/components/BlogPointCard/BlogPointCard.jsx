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

export function BlogPointRghtCard(props) {
  return (
    <div className={styles.blog_right}>
      <img src={props.image} alt="" />
      <div className={styles.blog_right_time}>
        <p>{props.date}</p>
        <p>{props.timeToRead}</p>
      </div>
      <h3 className={styles.blog_right_title}>{props.title}</h3>
    </div>
  );
}
