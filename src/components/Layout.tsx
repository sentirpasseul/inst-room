import styles from "./Body/Body.module.scss";
import { ContainerBanners } from "./Body/MainBanners/ContainerBanners";
import { ContainerCatalog } from "../pages/CatalogPage/CatalogPage";
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
