import styles from "./Body/Body.module.scss";
import { ContainerBanners } from "./Body/ContainerBanners";
import { ContainerCatalog } from "./Body/ContainerCatalog";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
