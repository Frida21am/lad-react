import styles from "./CartProduct.module.scss";
import { useCartContext } from "../../../hooks/useCartContext";
import { IProductInCart } from "../../../types/productInCart";
import { IProduct } from "../../../types/product";
import ProductCounter from "../../ProductCard/components/ProductCounter/ProductCounter";

type ProductProps = {
  filteredProducts: IProduct[] | undefined;
  productInCart: IProductInCart;
};

function CartProduct({ filteredProducts, productInCart }: ProductProps) {
  const { onRemoveFromCart } = useCartContext();
  const currentProduct = filteredProducts?.find(
    (p) => p.id === productInCart.id,
  );

  return (
    <div className={styles.product}>
      <div className={styles.productImg}>
        <img src={currentProduct?.images[0]} alt="product" />
      </div>
      <div className={styles.productTitle}>{currentProduct?.title}</div>
      <div className={styles.productCount}>
        <ProductCounter productInCart={productInCart} />
      </div>
      <div className={styles.productPrice}>{currentProduct?.price} $</div>
      <div className={styles.productControls}>
        <img
          src="/trash.png"
          alt="удалить"
          onClick={() => onRemoveFromCart(productInCart.id)}
        />
      </div>
    </div>
  );
}

export default CartProduct;
