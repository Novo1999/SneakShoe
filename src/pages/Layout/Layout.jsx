import { useEffect, useReducer } from "react";
import "./Layout.scss";
import { NavLink, Outlet } from "react-router-dom";
import Cart from "./Cart";

const initialState = {
  overlayIsOpen: false,
  hideScrollbar: false,
  cartProducts: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "overlayOpen": {
      return { ...state, overlayIsOpen: action.payload };
    }
    case "hideScrollbar": {
      return { ...state, hideScrollbar: action.payload };
    }
    default:
      throw new Error("Unknown Action");
  }
};

function Layout() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const html = document.documentElement;
    if (state.hideScrollbar) html.classList.add("hide-scrollbar");
    else html.classList.remove("hide-scrollbar");
  }, [state.hideScrollbar]);

  function handleCart() {
    dispatch({ type: "overlayOpen", payload: true });
    dispatch({ type: "hideScrollbar", payload: true });
  }
  return (
    <>
      {state.overlayIsOpen && <div className="modal__bg"></div>}
      <Cart dispatch={dispatch} state={state} />
      <nav className="navigation">
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
    </>
  );
}

export default Layout;
