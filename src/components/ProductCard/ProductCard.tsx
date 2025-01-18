import styles from "./ProductCard.module.scss";
import { ProductCounter, ProductLike } from "../index";
import { IDisplayProduct } from "../../types/product";

type ProductProps = {
  product: IDisplayProduct;
  onAddToCart: (productId: number) => void;
  onRemoveFromCart: (productId: number) => void;
  onDecreaseCounter: (productId: number) => void;
  onAddToFavorite: (productId: number) => void;
  onRemoveFromFavorite: (productId: number) => void;
};

const ProductCard = ({
  product,
  onAddToCart,
  onRemoveFromCart,
  onAddToFavorite,
  onRemoveFromFavorite,
  onDecreaseCounter,
}: ProductProps) => {
  return (
    <div className={styles.product}>
      <a href="#" className={styles.productImage}>
        <img src={product.imageUrl} alt="" />
      </a>
      <div className={styles.productRating}>{product.rating}</div>
      <ProductLike
        isFavorite={product.isFavorite}
        onFavoriteClick={() =>
          product.isFavorite
            ? onRemoveFromFavorite(product.id)
            : onAddToFavorite(product.id)
        }
      />
      <div className={styles.productInfo}>
        <h2 className={styles.productTitle}>{product.name}</h2>
        <div className={styles.productPrice}>
          <span className={styles.productPriceValue}>{product.price} ₽</span>
          <span className={styles.productPriceDiscount}>
            {product.discount}%
          </span>
        </div>
        <div className={styles.productButtons}>
          <button
            type="button"
            className={
              product.countInCart
                ? styles.productButton + " " + styles.active
                : styles.productButton
            }
            onClick={() =>
              product.countInCart
                ? onRemoveFromCart(product.id)
                : onAddToCart(product.id)
            }
          >
            {product.countInCart ? "Убрать из корзины" : "Добавить в корзину"}
          </button>
          {product.countInCart ? (
            <ProductCounter
              productInCart={product}
              onIncrement={() => onAddToCart(product.id)}
              onDecrement={() => onDecreaseCounter(product.id)}
              //onChangeInput={handleChangeInput}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
