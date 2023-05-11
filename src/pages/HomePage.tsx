import { Header } from "../components/Header/Header";
import { ContainerBanners } from "../components/Body/ContainerBanners";
import { Item } from "../components/Item/Item";
import items from "../data/mock_data.json";
import { useState } from "react";

import "../scss/HomePage.module.scss";

export function HomePage() {
  const [products, setItems] = useState(items)

  return (
    <>
      <ContainerBanners />

      <div className="container__items">
        {products.map((item) => (
          <Item product={item} key={item.id} img={item.img} />
        ))}
      </div>
    </>
  );
}
