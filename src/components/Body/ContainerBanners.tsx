import "../../scss/ContainerBanners.scss";
import { ReactComponent as ArrowLeftIcon} from '../../img/arrow_left.svg'


export function ContainerBanners() {
  return (
    <div className="container__banners">
      <div className="banner-instrument">
        <span className="banner-title">
          DeWALT - Инструмент с настоящим характером
        </span>
        <button className="bunner-button--catalog">Перейти в каталог</button>
        <button className="bunner-button--next">
            <ArrowLeftIcon />
        </button>
      </div>
      <div className="banner-stoks"></div>
      <div className="banner-double">
        <div className="banner-double--new-item"></div>
        <div className="banner-double--stocks-item"></div>
      </div>
    </div>
  )
}
