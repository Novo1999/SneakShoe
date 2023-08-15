import "./Cart.scss";

import { useCallback, useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";

function Cart() {
  const { cartProducts, cartDispatch, cartState } = useCart();
  function handleCartClose() {
    cartDispatch({ type: "overlay/open", payload: false });
    cartDispatch({ type: "scrollbar/hidden", payload: false });
    cartDispatch({ type: "nav/sticky", payload: true });
  }
  return (
    <div
      className={`cart ${
        cartState.overlayIsOpen ? "enable-cart" : "disable-cart"
      }`}
    >
      <header>
        <h2>Shopping Cart</h2>
        <button onClick={handleCartClose} className="cart__close-btn"></button>
      </header>
      <hr />
      {cartProducts.map((product) => {
        return (
          <CartItem
            key={product.id}
            id={product.id}
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

function CartItem({ name, image, price, id, discountedPrice, quantity }) {
  const { cartProducts, setCartProducts } = useCart();

  const [updatedQuantity, setUpdatedQuantity] = useState(quantity);

  // Updating and keeping the quantity synced

  function handleIncreaseQuantity() {
    setUpdatedQuantity((q) => q + 1);
  }

  function handleDecreaseQuantity() {
    // if (updatedQuantity === 1) return;
    setUpdatedQuantity((q) => q - 1);
  }

  useEffect(() => {
    const updatedCartProducts = cartProducts.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          quantity: updatedQuantity,
        };
      }
      return product;
    });

    setCartProducts(updatedCartProducts);
  }, [updatedQuantity, id, setCartProducts]);

  useEffect(() => {
    setUpdatedQuantity(quantity);
  }, [quantity]);

  // Delete cart item
  const handleDeleteItem = useCallback(
    function handleDeleteItem() {
      const updatedCart = cartProducts.filter((item) => {
        return item.id !== id;
      });
      setCartProducts(updatedCart);
    },
    [cartProducts, id, setCartProducts]
  );

  useEffect(() => {
    if (updatedQuantity < 1) handleDeleteItem();
  }, [updatedQuantity, handleDeleteItem]);

  return (
    <div className="cart__product">
      <div className="cart__product-left">
        <img src={image} alt="cart shoe" />
        <div className="cart__product-left-right">
          <p>{name}</p>
          <div className="cart__container-buttons">
            <button onClick={handleDecreaseQuantity}>-</button>
            <p>{updatedQuantity}</p>
            <button onClick={handleIncreaseQuantity}>+</button>
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
