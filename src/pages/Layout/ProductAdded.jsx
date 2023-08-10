import { useContext, useEffect, useState } from "react";
import "./ProductAdded.scss";
import { CartContext } from "./Layout";
function ProductAdded() {
  const { isAddedToCart, cartProducts, cartState } = useContext(CartContext);

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
