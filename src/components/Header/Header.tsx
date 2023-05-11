import styles from "./Header.module.scss";
import header_logo from "../../img/header_logo.svg";
import { ReactComponent as HeartIcon } from "../../img/ic_heart.svg";
import { ReactComponent as StatsIcon } from "../../img/ic_stats.svg";
import { ReactComponent as AccountIcon } from "../../img/ic_account.svg";
import { ReactComponent as CartIcon } from "../../img/ic_cart.svg";
import { ReactComponent as BurgerIcon } from "../../img/ic_burger.svg";
import { ReactComponent as InstagramIcon } from "../../img/ic_instagram.svg";
import { ReactComponent as VkIcon } from "../../img/ic_vk.svg";
import { ReactComponent as FacebookIcon } from "../../img/ic_facebook.svg";
import { ReactComponent as SearchIcon } from "../../img/ic_search.svg";

import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export function Header() {
  const [textSearch, setTextSearch] = useState("");
  const [isFavoriteHeader, setIsFavoriteHeader] = useState(false);

  const handleClickFavHeader = () => {
    setIsFavoriteHeader((prev) => !prev);
  };

  useEffect(() => {
    console.log("Нажата");
  }, [isFavoriteHeader]);

  console.log();

  return (
    <header className={styles.header}>
      <section className={styles.header__upper}>
        <div className={styles.header__upper_content}>
          <div className={styles.header__logo}>
            <NavLink to="/">
              <img src="/img/header_logo.svg" alt="" />
            </NavLink>
          </div>
          <div className={styles.header__info}>
            <span className={styles.info__time}>
              Время работы: 10:00-20:00
            </span>
            <div className={styles.info__contacts}>
              <p className={styles.info__contacts_number}>+7 495 120-32-14</p>
              <p className={styles.info__contacts_makeCall}>Заказать звонок</p>
            </div>
            <div className={styles.info__buttons}>
              <NavLink to="/favorites" className={styles.info__buttons_button}>
                <HeartIcon  />
              </NavLink>
              <NavLink to="/comparing" className={styles.info__buttons_button}>
                <StatsIcon />
              </NavLink>
              <NavLink to="/account" className={styles.info__buttons_button}>
                <AccountIcon />
              </NavLink>
              <NavLink to="/cart" className={styles.info__buttons_button}>
                <CartIcon />
              </NavLink>
            </div>
            <div className={styles.info__sum}>
              <p className={styles.info__sum_title}>Товаров на сумму</p>
              <p className={styles.info__sum_summary}>2 000₽</p>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.header__lower}>
        <div className={styles.header__catalog}>
          <BurgerIcon />
          <span className={styles.header__catalog_text}>Каталог товаров</span>
        </div>
        <ul className={styles.header__menu}>
          <li className={styles.header__menu_item}>
            <span>О компании</span>
          </li>
          <li className={styles.header__menu_item}>
            <span>Акции</span>
          </li>
          <li className={styles.header__menu_item}>
            <span>Хиты сезона</span>
          </li>
          <li className={styles.header__menu_item}>
            <span>Новинки</span>
          </li>
        </ul>
        <div className={styles.header__links}>
          <div className={styles.header__links_item}>
            <InstagramIcon />
          </div>
          <div className={styles.header__links_item}>
            <VkIcon />
          </div>
          <div className={styles.header__links_item}>
            <FacebookIcon />
          </div>
        </div>
        <div className={styles.header__search}>
          <div className={styles.header__search_ic}>
            <SearchIcon />
          </div>
          <input
            value={textSearch}
            onChange={(e) => setTextSearch(e.target.value)}
            className={styles.header__search_input}
            type="text"
            placeholder="Поиск по каталогу"
          />
        </div>
      </div>
    </header>
  );
}
