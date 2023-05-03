import React from "react";
import "./Item.scss";
import { ReactComponent as StatsIcon } from "../../img/ic_stats.svg";
import { ReactComponent as HeartIcon } from "../../img/ic_heart.svg";
import { ReactComponent as CartIcon } from "../../img/ic_cart.svg";
import item_img from "../../img/item_img.png";
import { ReactComponent as DoneIcon } from "../../img/ic_done.svg";
import { ReactComponent as StepIcon } from "../../img/ic_step.svg";

interface ItemsProps {
    id: number;
    title: string;
    price: number;
}

export function Item({ product }: any) {
  return (
    <div className="container__item">
      <div className="item__header">
        <div className="item__label">
          <span></span>
        </div>
        <div className="item__header-buttons">
          <div className="item__button">
            <StatsIcon className="item__button-icon" />
          </div>
          <div className="item__button">
            <HeartIcon className="item__button-icon" />
          </div>
        </div>
      </div>
      <div className="item__image">
        <img src={item_img} alt="Товар"/>
        <div className="item__step">
            <StepIcon className="item__step-img"/>
            <StepIcon className="item__step-img"/>
            <StepIcon className="item__step-img"/>
            <StepIcon className="item__step-img"/>
        </div>
      </div>
      <div className="item__title">
        <span>{product.title}</span>
      </div>
      <div className="item__buy">
        <div className="item__price">
          <span className="item__price-current">{product.price}</span>
          <span className="item__price-old">{product.price}</span>
        </div>
        <div className="item__exist">
          <DoneIcon className="item__exist-icon"/>
          <span className="item__exist-text">В наличии</span>
        </div>
        <div className="item__cart">
          <CartIcon className="item__cart-icon"/>
        </div>
      </div>
    </div>
  );
}
