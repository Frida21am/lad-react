import styles from "./ProductCard.module.scss";
import { ProductCounter, ProductLike } from "../index";
import { IProduct } from "../../types/product";
import { IProductInCart } from "../../types/productInCart";

type ProductProps = {
  product: IProduct;
  productsInCart: IProductInCart[];
  onChangeFavorite: (product: IProduct) => void;
  onChangeCart: (product: IProduct) => void;
  onChangeCounter: (productInCart: IProductInCart) => void;
};

const ProductCard = ({
  product,
  productsInCart,
  onChangeFavorite,
  onChangeCart,
  onChangeCounter,
}: ProductProps) => {
  const productInCart: IProductInCart | undefined = productsInCart.find(
    (el) => el.id === product.id,
  );

  const handleIncrement = () => {
    if (productInCart) {
      onChangeCounter({
        ...productInCart,
        countInCart: productInCart.countInCart + 1,
      });
    }
  };

  const handleDecrement = () => {
    if (productInCart) {
      onChangeCounter({
        ...productInCart,
        countInCart:
          productInCart.countInCart > 0 ? productInCart.countInCart - 1 : 0,
      });
    }
  };

  const handleChangeInput = (value: string) => {
    if (productInCart) {
      onChangeCounter({
        ...productInCart,
        countInCart: +value,
      });
    }
  };

  const handleAddToFavorite = () => {
    onChangeFavorite({
      ...product,
      isFavorite: !product.isFavorite,
    });
  };

  const handleAddToCart = () => {
    onChangeCart({
      ...product,
      isAddedToCart: !product.isAddedToCart,
    });
  };

  return (
    <div className={styles.product}>
      <a href="#" className={styles.productImage}>
        <img src={product.imageUrl} alt="" />
      </a>
      <div className={styles.productRating}>{product.rating}</div>
      <ProductLike
        isFavorite={product.isFavorite}
        onFavoriteClick={handleAddToFavorite}
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
              product.isAddedToCart && productInCart
                ? styles.productButton + " " + styles.active
                : styles.productButton
            }
            onClick={handleAddToCart}
          >
            {product.isAddedToCart && productInCart
              ? "Убрать из корзины"
              : "Добавить в корзину"}
          </button>
          {product.isAddedToCart && productInCart ? (
            <ProductCounter
              productInCart={productInCart}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              onChangeInput={handleChangeInput}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
