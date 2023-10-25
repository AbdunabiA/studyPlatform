import Footer from "components/layout/footer";
import Header from "components/layout/header";
import { Outlet } from "react-router-dom";
import s from "./layout.module.scss";

const Layout = () => {
  return (
    <div className={s.layout}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
