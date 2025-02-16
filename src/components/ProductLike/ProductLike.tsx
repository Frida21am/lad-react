import { useState } from "react";
import styles from "./ProductLike.module.scss";

function ProductLike() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div
      className={
        isFavorite
          ? `${styles.productLike} + ${styles.active}`
          : styles.productLike
      }
      onClick={() => (isFavorite ? setIsFavorite(false) : setIsFavorite(true))}
    >
      <svg
        width="21"
        height="18"
        viewBox="0 0 21 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 6.32647C20 11.4974 10.5 17 10.5 17C10.5 17 1 11.4974 1 6.32647C1 -0.694364 10.5 -0.599555 10.5 5.57947C10.5 -0.599555 20 -0.507124 20 6.32647Z"
          stroke="black"
          strokeLinejoin="round"
        ></path>
      </svg>
    </div>
  );
}

export default ProductLike;
