import "../../scss/Item.scss";
import { ReactComponent as StatsIcon } from "../../img/ic_stats.svg";
import { ReactComponent as HeartIcon } from "../../img/ic_heart.svg";
import { ReactComponent as CartIcon } from "../../img/ic_cart.svg";
import item_img from "../../img/item_img.png";
import { ReactComponent as DoneIcon } from "../../img/ic_done.svg";
import { ReactComponent as StepIcon } from "../../img/ic_step.svg";

export function Item() {
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
        <span>Эмаль Condor ПФ-115</span>
      </div>
      <div className="item__buy">
        <div className="item__price">
          <span className="item__price-current">500 ₽</span>
          <span className="item__price-old">720 ₽</span>
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
