import { createContext, useEffect, useReducer, useState } from "react";
import "./Layout.scss";
import { NavLink, Outlet } from "react-router-dom";
import Cart from "./Cart";
import { CTA, Contact, Footer } from "../../components";
import ProductAdded from "./ProductAdded";
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

function Layout() {
  const [cartProducts, setCartProducts] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleScroll() {
    if (window.scrollY > 700 && window.scrollY < 6200) {
      dispatch({ type: "stickyNav", payload: true });
    } else {
      dispatch({ type: "stickyNav", payload: false });
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (state.hideScrollbar) html.classList.add("hide-scrollbar");
    else html.classList.remove("hide-scrollbar");
  }, [state.hideScrollbar]);

  function handleCart() {
    dispatch({ type: "overlayOpen", payload: true });
    dispatch({ type: "hideScrollbar", payload: true });
    dispatch({ type: "stickyNav", payload: false });
  }

  return (
    <>
      <CartContext.Provider
        value={{
          cartProducts,
          setCartProducts,
          isAddedToCart: state.isAddedToCart,
          cartDispatch: dispatch,
          cartState: state,
          isSticky: state.isSticky,
        }}
      >
        <ProductAdded />
        {state.overlayIsOpen && <div className="modal__bg"></div>}
        <Cart dispatch={dispatch} state={state} />
        <nav className={`navigation ${state.isSticky ? "nav-sticky" : ""}`}>
          <div className="nav__left">
            <NavLink to="/">
              <img
                className="nav__logo"
                src="/images/shoe-logo.png"
                alt="shoe on fire"
              />
              <span className="nav__logo-text">SneakShoe</span>
            </NavLink>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/men">Men</NavLink>
            <NavLink to="/women">Women</NavLink>
            <NavLink to="/collection">Collection</NavLink>
            <NavLink to="/lookbook">Lookbook</NavLink>
            <NavLink to="/sale">Sale</NavLink>
          </div>
          <div className="nav__right">
            <NavLink to="/our-story">Our Story</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <button className="nav__cart" onClick={handleCart}>
              <img
                className="nav__cart__img"
                src="/images/cart-icon.png"
                alt="shopping cart"
              />
            </button>
          </div>
        </nav>
        <Outlet />
        <div className="page__bottom">
          <CTA />
          <Contact />
          <Footer />
        </div>
      </CartContext.Provider>
    </>
  );
}

export default Layout;
