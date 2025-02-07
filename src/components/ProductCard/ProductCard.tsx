import styles from "./ProductCard.module.scss";
import { ProductCounter, ProductLike } from "../index";
import { IDisplayProduct } from "../../types/product";
import { useFavoriteContext } from "../../hooks/useFavoriteContext";
import { useCartContext } from "../../hooks/useCartContext";

type ProductProps = {
  product: IDisplayProduct;
};

const ProductCard = ({ product }: ProductProps) => {
  const favoriteContext = useFavoriteContext();
  const cartContext = useCartContext();

  return (
    <div className={styles.product}>
      <a href="#" className={styles.productImage}>
        <img src={product.images[0]} alt="" />
      </a>
      <div className={styles.productRating}>{product.rating}</div>
      <ProductLike
        isFavorite={product.isFavorite}
        onFavoriteClick={() =>
          product.isFavorite
            ? favoriteContext.onRemoveFromFavorite(product.id)
            : favoriteContext.onAddToFavorite(product.id)
        }
      />
      <div className={styles.productInfo}>
        <h2 className={styles.productTitle}>{product.title}</h2>
        <div className={styles.productPrice}>
          <span className={styles.productPriceValue}>{product.price} ₽</span>
          <span className={styles.productPriceDiscount}>
            {product.discountPercentage}%
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
                ? cartContext.onRemoveFromCart(product.id)
                : cartContext.onAddToCart(product.id)
            }
          >
            {product.countInCart ? "Убрать из корзины" : "Добавить в корзину"}
          </button>
          {product.countInCart ? (
            <ProductCounter
              productInCart={product}
              onIncrement={() => cartContext.onAddToCart(product.id)}
              onDecrement={() => cartContext.onDecreaseCounter(product.id)}
              onChangeInput={(value) =>
                cartContext.onChangeCounter(product.id, value)
              }
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
