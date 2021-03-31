import styles from "./styles.module.css";

function Card(props) {
  return (
    <div className={styles.container}>
      <a className={styles.link} href={props.url}>
        <h3>{props.title}</h3>
      </a>
      <p>{props.description}</p>
    </div>
  );
}

export default Card;
