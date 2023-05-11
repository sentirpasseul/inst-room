import "./Header.module.scss";
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
    <header className="header">
      <section className="header__upper">
        <div className="header__upper-content">
          <div className="header__logo">
            <NavLink to="/">
              <img src="/img/header_logo.svg" alt="" />
            </NavLink>
          </div>
          <div className="header__info">
            <span className="info__time info-item">
              Время работы: 10:00-20:00
            </span>
            <div className="info__contacts info-item">
              <p className="info__contacts-number">+7 495 120-32-14</p>
              <p className="info__contacts-makeCall">Заказать звонок</p>
            </div>
            <div className="info__buttons">
              <NavLink to="/favorites" className="info__buttons-button">
                <HeartIcon className="info__buttons-button-icon" />
              </NavLink>
              <NavLink to="/comparing" className="info__buttons-button">
                <StatsIcon className="info__buttons-button-icon" />
              </NavLink>
              <NavLink to="/account" className="info__buttons-button">
                <AccountIcon className="info__buttons-button-icon" />
              </NavLink>
              <NavLink to="/cart" className="info__buttons-button">
                <CartIcon className="info__buttons-button-icon" />
              </NavLink>
            </div>
            <div className="info__sum info-item">
              <p className="info__sum-title">Товаров на сумму</p>
              <p className="info__sum-summary">2 000₽</p>
            </div>
          </div>
        </div>
      </section>
      <div className="header__lower">
        <div className="header__catalog">
          <BurgerIcon />
          <span className="header__catalog-text">Каталог товаров</span>
        </div>
        <ul className="header__menu">
          <li className="header__menu-item">
            <span>О компании</span>
          </li>
          <li className="header__menu-item">
            <span>Акции</span>
          </li>
          <li className="header__menu-item">
            <span>Хиты сезона</span>
          </li>
          <li className="header__menu-item">
            <span>Новинки</span>
          </li>
        </ul>
        <div className="header__links">
          <div className="header__links-item">
            <InstagramIcon />
          </div>
          <div className="header__links-item">
            <VkIcon />
          </div>
          <div className="header__links-item">
            <FacebookIcon />
          </div>
        </div>
        <div className="header__search">
          <div className="header__search-ic">
            <SearchIcon />
          </div>
          <input
            value={textSearch}
            onChange={(e) => setTextSearch(e.target.value)}
            className="header__search-input"
            type="text"
            placeholder="Поиск по каталогу"
          />
        </div>
      </div>
    </header>
  );
}
