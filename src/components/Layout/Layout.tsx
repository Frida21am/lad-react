import { Header } from "../index";
import { IProductInCart } from "../../types/productInCart";

type HeaderProps = {
  productsInCart: IProductInCart[];
  children: React.ReactNode;
};

function Layout({ productsInCart, children }: HeaderProps) {
  return (
    <div className="wrapper">
      <header>
        <Header productsInCart={productsInCart} />
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
