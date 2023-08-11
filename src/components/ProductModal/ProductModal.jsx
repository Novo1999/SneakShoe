/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./ProductModal.scss";
import { useCart } from "../../context/CartContext";
import ModalContent from "../ModalContent/ModalContent";
import { useProduct } from "../../context/ProductContext";

function ProductModal({ dispatch }) {
  const [quantity, setQuantity] = useState(1);
  const { cartProducts, setCartProducts, cartDispatch, cartState } = useCart();
  const { productState, productDispatch } = useProduct();

  // Adding product to cart

  const handleAddToCart = (newProduct) => {
    const updatedCartProducts = cartProducts.map((product) => {
      if (product.id === newProduct.id) {
        cartDispatch({ type: "cartUpdate", payload: true });
        return {
          ...product,
          quantity: product.quantity + quantity,
        };
      }
      return product;
    });
    setCartProducts(updatedCartProducts);
    const existingProduct = cartProducts.find(
      (product) => product.id === newProduct.id
    );
    if (existingProduct) {
      setCartProducts(updatedCartProducts);
    } else {
      newProduct.quantity = quantity;
      setCartProducts((prevCartProducts) =>
        prevCartProducts ? [...prevCartProducts, newProduct] : [newProduct]
      );
    }

    cartDispatch({ type: "isAddedToCart", payload: true });
  };

  // Modal and loading
  useEffect(() => {
    if (cartState.isAddedToCart) {
      cartDispatch({ type: "isLoading", isLoading: false });
      cartDispatch({ type: "openModal", isLoading: false });
    }
  });

  // Reset after product added popup
  setTimeout(() => {
    cartDispatch({ type: "isAddedToCart", payload: false });
  }, 2000);

  setTimeout(() => {
    cartDispatch({ type: "cartUpdate", payload: false });
  }, 2000);

  function handleCloseModal() {
    productDispatch({ type: "closeModal" });
    cartDispatch({ type: "stickyNav", payload: true });
    cartDispatch({
      type: "openModal",
      payload: false,
    });
  }

  return (
    <ModalContent
      onHandleAddToCart={handleAddToCart}
      state={productState}
      onHandleCloseModal={handleCloseModal}
      quantity={quantity}
      onSetQuantity={setQuantity}
    />
  );
}

export default ProductModal;

/*
isLoading = true => Show Spinner
ModalOpens = true => isLoading = false => Spinner Disappears
CloseModal => ModalOpens = false
 */
