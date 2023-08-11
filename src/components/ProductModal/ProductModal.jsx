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
      cartDispatch({ type: "openModal", isLoading: false });
    }
  });

  // Reset after product added message

  setTimeout(() => {
    cartDispatch({ type: "isAddedToCart", payload: false });
  }, 2000);

  // Reset after cart updated message
  setTimeout(() => {
    cartDispatch({ type: "cartUpdate", payload: false });
  }, 2000);

  return <ModalContent />;
}

export default ProductModal;
