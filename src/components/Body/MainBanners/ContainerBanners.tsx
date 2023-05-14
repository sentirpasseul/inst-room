import styles from "./ContainerBanners.module.scss";
import { ReactComponent as ArrowLeftIcon } from "../../../img/ic_arrow_left.svg";

export function ContainerBanners() {
  return (
    <div className={styles.container__banners}>
      <div className={styles.banner_instrument}>
        <span className={styles.banner_title}>
          DeWALT - Инструмент с настоящим характером
        </span>
        <button className={styles.banner__button_catalog}>
          Перейти в каталог
        </button>
        <button className={styles.banner__button_next}>
          <ArrowLeftIcon />
        </button>
      </div>
      <div className={styles.banner__stocks}>
        <span className={styles.banner__stocks_text}>Акции</span>
        <button className={styles.banner__button_next}>
          <ArrowLeftIcon />
        </button>
      </div>
      <div className={styles.banner__double}>
        <div className={styles.banner__double_newItem}>
          <span className={styles.double_newItem_text}>Новое поступление</span>
          <button className={styles.banner__button_next}>
          <ArrowLeftIcon />
        </button>
        </div>
        <div className={styles.banner__double_stocksItem}>
          <span className={styles.double_stocksItem_text}>Акции на сверла</span>
          <button className={styles.banner__button_next}>
          <ArrowLeftIcon />
        </button>
        </div>
      </div>
    </div>
  );
}
