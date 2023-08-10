import { useContext, useEffect } from "react";
import "./ProductAdded.scss";
import { CartContext } from "./Layout";
function ProductAdded() {
  const { isAddedToCart, cartProducts } = useContext(CartContext);
  useEffect(() => {
    console.log(cartProducts.slice(-1).at(0)?.name);
  }, [cartProducts]);

  return (
    <div
      className={`product__added ${
        isAddedToCart ? "product-added-enable" : ""
      }`}
    >
      <p>{cartProducts.slice(-1).at(0)?.name} Added to Cart</p>
    </div>
  );
}

export default ProductAdded;
