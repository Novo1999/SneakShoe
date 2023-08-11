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
};

const reducer = (state, action) => {
  switch (action.type) {
    case "overlayOpen":
      return { ...state, overlayIsOpen: action.payload };

    case "hideScrollbar":
      return { ...state, hideScrollbar: action.payload };

    case "stickyNav":
      return { ...state, isSticky: action.payload };

    case "isAddedToCart":
      return { ...state, isAddedToCart: action.payload };
    case "cartUpdate":
      return { ...state, cartUpdate: action.payload };

    default:
      throw new Error("Unknown Action");
  }
};

function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);
  function handleCart() {
    dispatch({ type: "overlayOpen", payload: true });
    dispatch({ type: "hideScrollbar", payload: true });
    dispatch({ type: "stickyNav", payload: false });
  }
  function handleScroll() {
    if (window.scrollY > 700 && window.scrollY < 6200) {
      dispatch({ type: "stickyNav", payload: true });
    } else {
      dispatch({ type: "stickyNav", payload: false });
    }
  }
  useEffect(() => {
    const html = document.documentElement;
    if (state.hideScrollbar) html.classList.add("hide-scrollbar");
    else html.classList.remove("hide-scrollbar");
  }, [state.hideScrollbar]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
  //   if (context === undefined)
  //     throw new Error("CartContext was used outside the CartProvider");
  return context;
}

export { CartProvider, useCart };
