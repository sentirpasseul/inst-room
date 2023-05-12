export function CartPage() {
  return (
    <>
      <div className="container">
        <div className="cart__header">
          <span className="cart__header_title"></span>
          <button className="cart__header_button"></button>
        </div>
        <div className="cart__table">
          <div className="cart__table_header">
            <span>Название</span>
            <span>Стоимость</span>
            <span>Количество</span>
            <span>Итого</span>
          </div>
          <div className="cart__table_items">
            
          </div>
          <div className="cart__table_summary"></div>
        </div>
      </div>
    </>
  );
}
