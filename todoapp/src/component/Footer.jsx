import styles from "./footer.module.css";

export default function Footer({completedTodos, totalTodos}) {
    return (
        <div className={styles.footer}>
            <span className={styles.item} >Completed Todo Tasks: {completedTodos.length}</span>
            <span className={styles.item} >Total Todo Tasks: {totalTodos}</span>
        </div>
    );
}