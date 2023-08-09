/* eslint-disable react/prop-types */
import { useState } from "react";
import "./ProductModal.scss";
function ProductModal({ dispatch, state, cartProducts, onSetCartProducts }) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = (newProduct) => {
    newProduct.quantity = quantity;
    onSetCartProducts(() =>
      cartProducts ? [...cartProducts, newProduct] : [newProduct]
    );
  };
  return (
    <>
      {state.overlayIsOpen && <div className="modal__bg"></div>}

      <div className="modal__container">
        <button
          onClick={() => dispatch({ type: "closeModal" })}
          className="modal__close-btn"
        ></button>
        <div className="modal__container-img">
          <img src={state.currentSneakerObject.img} alt="Sneaker image" />
        </div>
        <div className="modal__container-details">
          <div className="modal__details-section">
            <h2 className="modal__container-title">
              {state.currentSneakerObject.name}
            </h2>
            <p className="modal__container-price">
              {state.currentSneakerObject.discountedPrice && (
                <span className="modal__container-price-discount">
                  {state.currentSneakerObject.discountedPrice}
                </span>
              )}
              <span
                className={
                  state.currentSneakerObject.discountedPrice
                    ? "line-through"
                    : "sneaker-price"
                }
              >
                {state.currentSneakerObject.price}
              </span>
              & Free Shipping
            </p>
            <p className="modal__container-desc">
              Auctor eros suspendisse tellus venenatis sodales purus non
              pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar
              odio feugiat consectetur egestas magna pharetra cursus risus,
              lectus enim eget eu et lobortis faucibus.
            </p>
            <div className="modal__container-category">
              <p>Categories: </p>
              <button>{state.currentSneakerObject.category}</button>
              <button>{state.currentSneakerObject.altCategory}</button>
            </div>
            <div className="modal__container-checkout">
              <p>Guaranteed Safe Checkout</p>
              <div className="modal__container-checkout-payment">
                <img src="/images/payment-icons.png" alt="payment" />
              </div>
            </div>
          </div>
          <div className="modal-cart-section">
            <div className="modal__container-cart">
              <div className="modal__container-cart-buttons">
                <button
                  onClick={() => {
                    if (quantity === 1) return;
                    setQuantity((q) => q - 1);
                  }}
                >
                  -
                </button>
                <p>{quantity}</p>
                <button
                  onClick={() => {
                    setQuantity((q) => q + 1);
                  }}
                >
                  +
                </button>
              </div>
              <div className="modal__container-cart-btn">
                <button
                  onClick={() => handleAddToCart(state.currentSneakerObject)}
                >
                  add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductModal;
