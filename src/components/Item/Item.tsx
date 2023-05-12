import styles from "./Item.module.scss";
import { ReactComponent as StatsIcon } from "../../img/ic_stats.svg";
import { ReactComponent as HeartIcon } from "../../img/ic_heart.svg";
import { ReactComponent as CartIcon } from "../../img/ic_cart.svg";
import { ReactComponent as DoneIcon } from "../../img/ic_done.svg";
import { ReactComponent as StepIcon } from "../../img/ic_step.svg";
import { ReactComponent as CheckIcon } from "../../img/ic_check.svg";
import { useState } from "react";

interface ItemsProps {
  id: number;
  title: string;
  price: number;
  img: string;
}

export function Item({ product }: any) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isCompared, setIsCompared] = useState(false);
  const [isAddToCart, setIsAddToCart] = useState(false);

  const handleClickFav = () => {
    setIsFavorite((prev) => !prev);
  };

  const handleClickCompare = () => {
    setIsCompared((prev) => !prev);
  };

  const handleClickAddCart = () => {
    setIsAddToCart((prev) => !prev);
  };

  return (
    <div className={styles.container__item}>
      <div className={styles.item__header}>
        <div className={styles.item__label}>
          <span></span>
        </div>
        <div className={styles.item__header_buttons}>
          <div className={styles.item__button}>
            {isCompared ? (
              <StatsIcon
                className={styles.button__stats_active}
                onClick={handleClickCompare}
              />
            ) : (
              <StatsIcon
                className={styles.button__stats}
                onClick={handleClickCompare}
              />
            )}
          </div>
          <div className={styles.item__button}>
            {isFavorite ? (
              <HeartIcon
                className={styles.button__heart_active}
                onClick={handleClickFav}
              />
            ) : (
              <HeartIcon
                className={styles.button__heart}
                onClick={handleClickFav}
              />
            )}
          </div>
        </div>
      </div>
      <div className={styles.container__image}>
        <img
          className={styles.container__image_item}
          src={product.img}
          alt=""
        />
      </div>
      <div className={styles.item__step}>
        <StepIcon className={styles.item__step_img} />
        <StepIcon className={styles.item__step_img} />
        <StepIcon className={styles.item__step_img} />
        <StepIcon className={styles.item__step_img} />
      </div>
      <div className={styles.item__title}>
        <span>{product.title}</span>
      </div>
      <div className={styles.item__buy}>
        <div className={styles.item__price}>
          <span className={styles.item__price_current}>{product.price} ₽</span>
          <span className={styles.item__price_old}>{product.price} ₽</span>
        </div>
        <div className={styles.item__exist}>
          <DoneIcon className={styles.item__exist_icon} />
          <span className={styles.item__exist_text}>В наличии</span>
        </div>
        
          {isAddToCart ? (
            <div className={styles.item__cart_active} onClick={handleClickAddCart}>
            <CheckIcon
              className={styles.item__check_icon}
            />
            </div>
          ) : (
            <div className={styles.item__cart} onClick={handleClickAddCart}>
            <CartIcon
              className={styles.item__cart_icon}
            />
            </div>
          )}
      </div>
    </div>
  );
}
