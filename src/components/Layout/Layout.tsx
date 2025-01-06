import { ReactNode } from "react";
import { Profile } from "../index";

function Layout(props: { children: ReactNode }) {
  const isLoggedIn = true;

  return (
    <div className="wrapper">
      {Boolean(isLoggedIn) && <Profile />}
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
