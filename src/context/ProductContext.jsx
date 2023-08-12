import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
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
    case "quickView/open":
      return {
        ...state,
        isOpened: true,
        currentSneakerObject: action.payload,
        overlayIsOpen: true,
      };
    case "mouse/enter":
      return {
        ...state,
        currentSneaker: action.payload,
      };
    case "mouse/leave":
      return {
        ...state,
        currentSneaker: null,
      };
    case "modal/close":
      return {
        ...state,
        currentSneaker: null,
        isOpened: false,
        currentSneakerObject: {},
        overlayIsOpen: false,
      };
    case "product/view":
      return {
        ...state,
        currentSneaker: action.payload,
        currentSneakerObject: action.payload,
      };

    default:
      throw new Error("Unknown Action");
  }
};

function ProductProvider({ children }) {
  const [quantity, setQuantity] = useState(1);
  const {
    isAddedToCart,
    cartDispatch,
    cartState,
    cartProducts,
    setCartProducts,
  } = useCart();

  const [state, dispatch] = useReducer(reducer, initialState);

  // Adding product to cart
  const handleAddToCart = (newProduct) => {
    const updatedCartProducts = cartProducts.map((product) => {
      if (product.id === newProduct.id) {
        cartDispatch({ type: "cart/update", payload: true });
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

    cartDispatch({ type: "product/addedToCart", payload: true });
    setQuantity(1);
  };

  useEffect(() => {
    if (isAddedToCart) dispatch({ type: "modal/close" });
    cartDispatch({ type: "nav/sticky", payload: true });
  }, [isAddedToCart, cartDispatch]);

  //   Product quick view
  function handleQuickView(item) {
    setTimeout(() => {
      dispatch({
        type: "quickView/open",
        payload: item,
      });
      cartDispatch({
        type: "modal/open",
        payload: true,
      });
    }, 600);
    cartDispatch({ type: "isLoading", payload: true });
    cartDispatch({ type: "nav/sticky", payload: false });
  }

  useEffect(() => {
    if (cartState.modalOpen)
      cartDispatch({ type: "isLoading", payload: false });
  }, [cartDispatch, cartState.modalOpen]);

  function handleMouseEnter(i) {
    dispatch({ type: "mouse/enter", payload: i });
  }
  function handleMouseLeave() {
    dispatch({ type: "mouse/leave" });
  }

  useEffect(() => {
    const html = document.documentElement;
    if (state.isOpened) html.classList.add("hide-scrollbar");
    else html.classList.remove("hide-scrollbar");
  }, [state.isOpened]);

  // Modal Close
  function handleCloseModal() {
    dispatch({ type: "modal/close" });
    cartDispatch({ type: "stickyNav", payload: true });
    cartDispatch({
      type: "modal/open",
      payload: false,
    });
    setQuantity(1);
  }

  return (
    <ProductContext.Provider
      value={{
        handleMouseEnter,
        handleMouseLeave,
        handleQuickView,
        productState: state,
        productDispatch: dispatch,
        setQuantity,
        quantity,
        handleAddToCart,
        handleCloseModal,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

function useProduct() {
  const context = useContext(ProductContext);
  if (context === undefined)
    throw new Error("ProductContext was used outside the ProductProvider");
  return context;
}

export { ProductProvider, useProduct };
