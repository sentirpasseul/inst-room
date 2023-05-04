import { Header } from "../components/Header/Header";
import { ContainerBanners } from "../components/Body/ContainerBanners";
import { Item } from "../components/Item/Item";
import items from "../data/mock_data.json";
import { useState } from "react";

import '../scss/HomePage.scss'

export function HomePage() {
  return (
    <>
      <Header />
      <ContainerBanners />

      <div className="container__items">
        {items.map((item) => (
          <Item product={item} key={item.id} />
        ))}
      </div>
    </>
  );
}
