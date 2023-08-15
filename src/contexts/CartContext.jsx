import {
  useContext,
  useState,
  useEffect,
  createContext,
  useReducer,
} from "react";

export const CartContext = createContext();

const initialState = {
  overlayIsOpen: false,
  hideScrollbar: false,
  cartProducts: [],
  isSticky: false,
  isAddedToCart: false,
  cartUpdate: false,
  isLoading: false,
  modalOpen: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "overlay/open":
      return { ...state, overlayIsOpen: action.payload };
    case "scrollbar/hidden":
      return { ...state, hideScrollbar: action.payload };
    case "nav/sticky":
      return { ...state, isSticky: action.payload };
    case "product/addedToCart":
      return { ...state, isAddedToCart: action.payload };
    case "cart/update":
      return { ...state, cartUpdate: action.payload };
    case "isLoading":
      return { ...state, isLoading: action.payload };
    case "modal/open":
      return { ...state, modalOpen: action.payload };
    default:
      throw new Error("Unknown Action");
  }
};

function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  const [state, dispatch] = useReducer(reducer, initialState);

  function handleCart() {
    dispatch({ type: "overlay/open", payload: true });
    dispatch({ type: "scrollbar/hidden", payload: true });
    dispatch({ type: "nav/sticky", payload: false });
  }

  // Hiding the Scrollbar

  useEffect(() => {
    const html = document.documentElement;
    if (state.hideScrollbar) html.classList.add("hide-scrollbar");
    else html.classList.remove("hide-scrollbar");
  }, [state.hideScrollbar]);

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        isAddedToCart: state.isAddedToCart,
        cartDispatch: dispatch,
        cartState: state,
        isSticky: state.isSticky,
        handleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("CartContext was used outside the CartProvider");
  return context;
}

export { CartProvider, useCart };
