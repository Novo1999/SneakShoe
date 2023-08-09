import "./Cart.scss";
import { CartContext } from "./Layout";
import { useContext, useEffect, useState } from "react";
function Cart({ state, dispatch }) {
  const { cartProducts } = useContext(CartContext);
  function handleCartClose() {
    dispatch({ type: "overlayOpen", payload: false });
    dispatch({ type: "hideScrollbar", payload: false });
    dispatch({ type: "stickyNav", payload: true });
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
      {cartProducts.map((product, i) => {
        return (
          <CartItem
            key={i}
            index={i}
            id={product.ID}
            name={product.name}
            image={product.img}
            price={product.price}
            quantity={product.quantity}
            discountedPrice={product.discountedPrice}
          />
        );
      })}
    </div>
  );
}

export default Cart;

function CartItem({
  name,
  image,
  price,
  id,
  index,
  discountedPrice,
  quantity,
}) {
  const { cartProducts, setCartProducts } = useContext(CartContext);
  const [updatedQuantity, setUpdatedQuantity] = useState(quantity);

  function handleDeleteItem() {
    const updatedCart = cartProducts.filter((_, i) => {
      return i !== index;
    });
    setCartProducts(updatedCart);
  }

  return (
    <div className="cart__product">
      <div className="cart__product-left">
        <img src={image} alt="cart shoe" />
        <div className="cart__product-left-right">
          <p>{name}</p>
          <div className="cart__container-buttons">
            <button
              onClick={() => {
                if (updatedQuantity === 1) return;
                setUpdatedQuantity((q) => q - 1);
              }}
            >
              -
            </button>
            <p>{updatedQuantity}</p>
            <button
              onClick={() => {
                setUpdatedQuantity((q) => q + 1);
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="cart__product-right">
        <button
          onClick={handleDeleteItem}
          className="cart__product-delete-btn"
        ></button>
        <span>
          $
          {discountedPrice
            ? (discountedPrice * updatedQuantity).toFixed(2)
            : (price * updatedQuantity).toFixed(2)}
        </span>
      </div>
    </div>
  );
}
