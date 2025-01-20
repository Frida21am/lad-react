import styles from "./ProductCounter.module.scss";
import { IProductInCart } from "../../../../types/productInCart";

type ChangeCountProps = {
  productInCart: IProductInCart | undefined;
  onIncrement: () => void;
  onDecrement: () => void;
  onChangeInput: (value: number) => void;
};

function ProductCounter({
  productInCart,
  onIncrement,
  onDecrement,
  onChangeInput,
}: ChangeCountProps) {
  return (
    <div className={styles.counter}>
      <button
        className={styles.counterButton}
        type="button"
        onClick={onDecrement}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path
            fill="currentColor"
            d="M5 11a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z"
          ></path>
        </svg>
      </button>
      <input
        className={styles.counterNumber}
        type="text"
        onChange={(e) => {
          onChangeInput(+e.target.value);
        }}
        defaultValue={productInCart?.countInCart}
        value={productInCart?.countInCart}
      />
      <button
        className={styles.counterButton}
        type="button"
        onClick={onIncrement}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path
            fill="currentColor"
            d="M12 4a1 1 0 0 0-1 1v6H5a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V5a1 1 0 0 0-1-1"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default ProductCounter;
