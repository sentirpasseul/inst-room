import { Link } from "react-router-dom";
import { ReactComponent as InstagramIcon } from "../../img/ic_instagram.svg";
import { ReactComponent as VkIcon } from "../../img/ic_vk.svg";
import { ReactComponent as FacebookIcon } from "../../img/ic_facebook.svg";
import styles from './Footer.module.scss'

export function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.container__main}>
          <div className={styles.main__catalog}>
            <p className={styles.catalog_label}>Малярные товары</p>
            <p className={styles.catalog_label}>Электрооборудование</p>
            <p className={styles.catalog_label}>Спецодежда</p>
            <p className={styles.catalog_label}>Для дома и дачи</p>
            <p className={styles.catalog_label}>Сезонное</p>
            <p className={styles.catalog_label}>Инструмент</p>
          </div>
          <div className={styles.main__about}>
            <p className={styles.about_label}>О компании</p>
            <p className={styles.about_label}>Контакты</p>
            <p className={styles.about_label}>Новинки</p>
            <p className={styles.about_label}>Хиты сезона</p>
            <p className={styles.about_label}>Распродажи</p>
          </div>
          <div className={styles.main__info}>
            <div className="logo info-item">
              <img src="/img/header_logo.svg" alt="" />
            </div>
            <div className="info-contacts info-item">
              <p className="contacts-label">+7 495 120-32-14</p>
              <p className="contacts-label">+7 495 120-32-15</p>
            </div>
            <div className="info-links info-item">
              <Link to="">
                <InstagramIcon />
              </Link>
              <Link to="">
                <VkIcon />
              </Link>
              <Link to="">
                <FacebookIcon />
              </Link>
            </div>
            <div className="info-about">
                <p className="info-text">Соглашение пользователя</p>
                <p className="info-text">«Copyright © Название 2023»</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
