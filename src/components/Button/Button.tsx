import styles from "./Button.module.scss";

function Button() {
  return (
    <div className={styles.buttonWrap}>
      <button className={styles.button} onClick={() => alert("hello")}>
        Кнопка
      </button>
    </div>
  );
}

export default Button;
