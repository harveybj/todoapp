import styles from "./todoitem.module.css";
export default function TodoItem({ item }) {
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>{item}</div>
      <span>
        <button className={styles.deleteButton}>x</button>
      </span>
      <hr className={styles.line} />
    </div>
  );
}
