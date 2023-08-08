import "./Cart.scss";
function Cart({ state, dispatch }) {
  function handleCartClose() {
    dispatch({ type: "overlayOpen", payload: false });
    dispatch({ type: "hideScrollbar", payload: false });
  }
  return (
    <div
      className={`cart ${state.overlayIsOpen ? "enable-cart" : "disable-cart"}`}
    >
      <header>
        <h2>Shopping Cart</h2>
        <button onClick={handleCartClose} className="cart__close-btn"></button>
      </header>
      <hr />
      <div className="cart__product">
        <div className="cart__product-left">
          <img src="/images/Shoe for sale/Sneaker-1.jpg" alt="cart shoe" />
          <div className="cart__product-left-right">
            <p>Mens Classic Shoe</p>
            <div className="cart__container-buttons">
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>
          </div>
        </div>
        <div className="cart__product-right">
          <button className="cart__product-delete-btn"></button>
          <span>$79.90</span>
        </div>
      </div>
    </div>
  );
}

export default Cart;
