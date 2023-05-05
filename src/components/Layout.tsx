import  Body  from "./Body/Body";
import { ContainerBanners } from "./Body/ContainerBanners";
import { Header } from "./Header/Header";

export function Layout() {
  return (
    <>
      <Header />
      <Body>
        <ContainerBanners />
      </Body>
    </>
  );
}
