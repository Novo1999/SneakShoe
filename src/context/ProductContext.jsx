import { createContext, useContext, useEffect, useReducer } from "react";
import { useCart } from "./CartContext";

export const ProductContext = createContext();

const initialState = {
  currentSneaker: null,
  isOpened: false,
  currentSneakerObject: {},
  overlayIsOpen: false,
  isLoading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "quickView":
      return {
        ...state,
        isOpened: true,
        currentSneakerObject: action.payload,
        overlayIsOpen: true,
      };
    case "mouseEnter":
      return {
        ...state,
        currentSneaker: action.payload,
      };
    case "mouseLeave":
      return {
        ...state,
        currentSneaker: null,
      };
    case "closeModal":
      return {
        ...state,
        currentSneaker: null,
        isOpened: false,
        currentSneakerObject: {},
        overlayIsOpen: false,
      };
    default:
      throw new Error("Unknown Action");
  }
};

function ProductProvider({ children }) {
  const { isAddedToCart, cartDispatch, cartState } = useCart();

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (isAddedToCart) dispatch({ type: "closeModal" });
    cartDispatch({ type: "stickyNav", payload: true });
  }, [isAddedToCart, cartDispatch]);

  function handleQuickView(item) {
    setTimeout(() => {
      dispatch({
        type: "quickView",
        payload: item,
      });
      cartDispatch({
        type: "openModal",
        payload: true,
      });
    }, 600);
    cartDispatch({ type: "isLoading", payload: true });
    cartDispatch({ type: "stickyNav", payload: false });
  }

  useEffect(() => {
    if (cartState.modalOpen)
      cartDispatch({ type: "isLoading", payload: false });
  }, [cartDispatch, cartState.modalOpen]);

  function handleMouseEnter(i) {
    dispatch({ type: "mouseEnter", payload: i });
  }
  function handleMouseLeave() {
    dispatch({ type: "mouseLeave" });
  }

  useEffect(() => {
    const html = document.documentElement;
    if (state.isOpened) html.classList.add("hide-scrollbar");
    else html.classList.remove("hide-scrollbar");
  }, [state.isOpened]);

  return (
    <ProductContext.Provider
      value={{
        handleMouseEnter,
        handleMouseLeave,
        handleQuickView,
        productState: state,
        productDispatch: dispatch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

function useProduct() {
  const context = useContext(ProductContext);
  //   if (context === undefined)
  //     throw new Error("ProductContext was used outside the ProductProvider");
  return context;
}

export { ProductProvider, useProduct };
