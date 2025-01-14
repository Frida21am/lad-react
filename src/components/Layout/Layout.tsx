import { Outlet } from "react-router-dom";
import { Header } from "../index";
import { IProductInCart } from "../../types/productInCart";

type HeaderProps = {
  productsInCart: IProductInCart[];
};

function Layout({ productsInCart }: HeaderProps) {
  return (
    <div className="wrapper">
      <header>
        <Header productsInCart={productsInCart} />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
