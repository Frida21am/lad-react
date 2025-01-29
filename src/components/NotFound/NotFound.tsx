import styles from "./NotFound.module.scss";

function NotFound() {
  return (
    <div className={styles.notfound}>
      <div className={styles.error}>404</div>
    </div>
  );
}

export default NotFound;
