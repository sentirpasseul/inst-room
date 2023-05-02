import "../../scss/Header.scss";
import header_logo from "../../img/header_logo.svg";
import ic_heart from "../../img/ic_heart.svg";
import ic_stats from "../../img/ic_stats.svg";
import ic_account from "../../img/ic_account.svg";
import ic_cart from "../../img/ic_cart.svg";
import ic_burger from "../../img/ic_burger.svg";
import ic_instagram from "../../img/ic_instagram.svg";
import ic_vk from "../../img/ic_vk.svg";
import ic_facebook from "../../img/ic_facebook.svg";
import ic_search from "../../img/ic_search.svg";

export function Header() {
  return (
    <header className="header">
      <section className="header__upper">
        <div className="header__upper-content">
          <div className="header__logo">
            <img src={header_logo} alt="" />
          </div>
          <div className="header__info">
            <span className="info__time info-item">
              Время работы: 10:00-20:00
            </span>
            <div className="info__contacts info-item">
              <p className="info__contacts-number">+7 495 120-32-14</p>
              <p className="info__contacts-makeCall">Заказать звонок</p>
            </div>
            <div className="info__buttons info-item">
              <button className="info__buttons-button">
                <img src={ic_heart} alt="" />
              </button>
              <button className="info__buttons-button">
                <img src={ic_stats} alt="" />
              </button>
              <button className="info__buttons-button">
                <img src={ic_account} alt="" />
              </button>
              <button className="info__buttons-button">
                <img src={ic_cart} alt="" />
              </button>
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
          <img src={ic_burger} alt="Каталог товаров" />
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
            <img src={ic_instagram} alt="" />
          </div>
          <div className="header__links-item">
            <img src={ic_vk} alt="" />
          </div>
          <div className="header__links-item">
            <img src={ic_facebook} alt="" />
          </div>
        </div>
        <div className="header__search">
          <div className="header__search-ic">
            <img src={ic_search} alt="" />
          </div>
          <input
            className="header__search-input"
            type="text"
            placeholder="Поиск по каталогу"
          />
        </div>
      </div>
    </header>
  );
}
