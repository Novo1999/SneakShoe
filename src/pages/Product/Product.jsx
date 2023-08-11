import ModalContent from "../../components/ModalContent/ModalContent";
import "./Product.scss";

function Product() {
  return (
    <div>
      <ModalContent
        onHandleAddToCart={handleAddToCart}
        state={state}
        onHandleCloseModal={handleCloseModal}
        quantity={quantity}
        onSetQuantity={setQuantity}
      />
    </div>
  );
}

export default Product;
