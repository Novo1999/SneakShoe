import { useProduct } from "../../context/ProductContext";

function ModalContent() {
  const {
    productState,
    quantity,
    setQuantity,
    handleAddToCart,
    handleCloseModal,
  } = useProduct();
  return (
    <div className="modal__container">
      <button
        onClick={handleCloseModal}
        className="modal__close-btn btn-disable"
      ></button>
      <div className="modal__container-img">
        <img src={productState.currentSneakerObject.img} alt="Sneaker image" />
      </div>
      <div className="modal__container-details">
        <div className="modal__details-section">
          <h2 className="modal__container-title">
            {productState.currentSneakerObject.name}
          </h2>
          <p className="modal__container-price">
            {productState.currentSneakerObject.discountedPrice && (
              <span className="modal__container-price-discount">
                {productState.currentSneakerObject.discountedPrice}
              </span>
            )}
            <span
              className={
                productState.currentSneakerObject.discountedPrice
                  ? "line-through"
                  : "sneaker-price"
              }
            >
              {productState.currentSneakerObject.price}
            </span>
            & Free Shipping
          </p>
          <p className="modal__container-desc">
            Auctor eros suspendisse tellus venenatis sodales purus non
            pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio
            feugiat consectetur egestas magna pharetra cursus risus, lectus enim
            eget eu et lobortis faucibus.
          </p>
          <div className="modal__container-category">
            <p>Categories: </p>
            <button>{productState.currentSneakerObject.category}</button>
            <button>{productState.currentSneakerObject.altCategory}</button>
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
                onClick={() =>
                  handleAddToCart(productState.currentSneakerObject)
                }
              >
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalContent;
