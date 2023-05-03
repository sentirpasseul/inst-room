import '../../scss/Item.scss'
import { ReactComponent as HeartIcon } from '../../img/ic_heart.svg'
import { ReactComponent as CartIcon } from '../../img/ic_cart.svg'
import item_img from '../../img/item_img.png'
import { ReactComponent as DoneIcon} from '../../img/ic_done.svg'



export function Item() {
  return (
    <div className="container__item">
      <div className="item__buttons">
        <div className="item__buttons-button">
          <img src={""} alt=""/>
        </div>
        <div className="item__buttons-button">
            <HeartIcon fill='blue'/>
        </div>
      </div>
      <div className="item__image">
        <img src={item_img} alt="" />
        <div className="item__step"></div>
      </div>
      <div className="item__title">
        <span>Эмаль Condor ПФ-115</span>
      </div>
      <div className="item__buy">
        <div className="item__price">
            <span>500 ₽</span>
            <span className='item__price-old'>720 ₽</span>
        </div>
        <div className="item__exist">
            <DoneIcon stroke='blue'/>
            <span className='item__exist-text'>В наличии</span>
        </div>
        <div className="item__cart">
            <CartIcon className='item__cart-icon' stroke='black'/>
        </div>
      </div>
    </div>
  );
}
