import "./ProductAdded.scss";

import { useCart } from "../../context/CartContext";
function ProductAdded() {
  const { isAddedToCart, cartProducts, cartState } = useCart();

  return (
    <div
      className={`product__added ${
        isAddedToCart ? "product-added-enable" : ""
      }`}
    >
      {isAddedToCart && !cartState.cartUpdate && (
        <p>{cartProducts.slice(-1).at(0)?.name} Added to Cart</p>
      )}
      {isAddedToCart && cartState.cartUpdate && <p>Cart Updated</p>}
    </div>
  );
}

export default ProductAdded;
