import styles from "./ThemeIconDark.module.scss";

function ThemeIconDark() {
  return (
    <div className={styles.themeIconDark}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.5"
          width="39"
          height="39"
          rx="19.5"
          stroke="#6F7979"
        />
        <path
          d="M20.46 30.75C20.29 30.75 20.12 30.75 19.95 30.74C14.35 30.49 9.67001 25.98 9.28001 20.48C8.94001 15.76 11.67 11.35 16.07 9.49999C17.32 8.97999 17.98 9.37999 18.26 9.66999C18.54 9.94999 18.93 10.6 18.41 11.79C17.95 12.85 17.72 13.98 17.73 15.14C17.75 19.57 21.43 23.33 25.92 23.51C26.57 23.54 27.21 23.49 27.83 23.38C29.15 23.14 29.7 23.67 29.91 24.01C30.12 24.35 30.36 25.08 29.56 26.16C27.44 29.06 24.07 30.75 20.46 30.75ZM10.77 20.37C11.11 25.13 15.17 29.03 20.01 29.24C23.3 29.4 26.42 27.9 28.34 25.28C28.49 25.07 28.56 24.92 28.59 24.84C28.5 24.83 28.34 24.82 28.09 24.87C27.36 25 26.6 25.05 25.85 25.02C20.57 24.81 16.25 20.38 16.22 15.16C16.22 13.78 16.49 12.45 17.04 11.2C17.14 10.98 17.16 10.83 17.17 10.75C17.08 10.75 16.92 10.77 16.66 10.88C12.85 12.48 10.49 16.3 10.77 20.37Z"
          fill="#161D1D"
        />
      </svg>
    </div>
  );
}

export default ThemeIconDark;
