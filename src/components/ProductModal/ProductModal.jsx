import "./ProductModal.scss";
function ProductModal() {
  return (
    <div className="modal__container">
      <div className="modal__container-img">
        <img src="/images/Shoe for sale/Sneaker-1.jpg" alt="Sneaker image" />
      </div>
      <div className="modal__container-details">
        <div className="modal__details-section">
          <h2 className="modal__container-title">Men&apos;s Navy Running</h2>
          <p className="modal__container-price">
            <span>$104.90</span> & Free Shipping
          </p>
          <p className="modal__container-desc">
            Auctor eros suspendisse tellus venenatis sodales purus non
            pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio
            feugiat consectetur egestas magna pharetra cursus risus, lectus enim
            eget eu et lobortis faucibus.
          </p>
          <div className="modal__container-category">
            <p>Categories: </p>
            <button>Men</button>
            <button>Running</button>
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
  );
}

export default ProductModal;
