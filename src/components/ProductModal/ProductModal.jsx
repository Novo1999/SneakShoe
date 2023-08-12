/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "./ProductModal.scss";
import { useCart } from "../../context/CartContext";
import ModalContent from "../ModalContent/ModalContent";

function ProductModal() {
  const { cartDispatch, cartState } = useCart();

  // Modal and loading

  useEffect(() => {
    if (cartState.isAddedToCart) {
      cartDispatch({ type: "isLoading", isLoading: false });
      cartDispatch({ type: "modal/open", isLoading: false });
    }
  }, [cartDispatch, cartState.isAddedToCart]);

  // Reset after product added message

  setTimeout(() => {
    cartDispatch({ type: "product/addedToCart", payload: false });
  }, 2000);

  // Reset after cart updated message
  setTimeout(() => {
    cartDispatch({ type: "cart/update", payload: false });
  }, 2000);

  return <ModalContent />;
}

export default ProductModal;
