/* eslint-disable react/prop-types */
import "./ProductModal.scss";
function ProductModal({ dispatch, currentSneakerObject, state }) {
  return (
    <>
      {state.overlayIsOpen && <div className="modal__bg"></div>}

      <div className="modal__container">
        <button
          onClick={() => dispatch({ type: "closeModal" })}
          className="modal__close-btn"
        ></button>
        <div className="modal__container-img">
          <img src={currentSneakerObject.img} alt="Sneaker image" />
        </div>
        <div className="modal__container-details">
          <div className="modal__details-section">
            <h2 className="modal__container-title">
              {currentSneakerObject.name}
            </h2>
            <p className="modal__container-price">
              {currentSneakerObject.discountedPrice && (
                <span className="modal__container-price-discount">
                  {currentSneakerObject.discountedPrice}
                </span>
              )}
              <span
                className={
                  currentSneakerObject.discountedPrice
                    ? "line-through"
                    : "sneaker-price"
                }
              >
                {currentSneakerObject.price}
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
              <button>{currentSneakerObject.category}</button>
              <button>{currentSneakerObject.altCategory}</button>
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
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>
              <div className="modal__container-cart-btn">
                <button>add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductModal;
