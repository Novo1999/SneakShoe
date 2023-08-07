import { useState, useEffect } from "react";
import "./Layout.scss";
import { NavLink, Outlet } from "react-router-dom";
import Cart from "./Cart";

function Layout() {
  const [overlayIsOpen, setOverlayIsOpen] = useState(false);
  const [hideScrollbar, setHideScrollbar] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (hideScrollbar) html.classList.add("hide-scrollbar");
    else html.classList.remove("hide-scrollbar");
  }, [hideScrollbar]);

  function handleCart() {
    setOverlayIsOpen(true);
    setHideScrollbar(true);
  }
  return (
    <>
      {overlayIsOpen && <div className="modal__bg"></div>}
      <Cart
        overlayIsOpen={overlayIsOpen}
        onSetOverlayIsOpen={setOverlayIsOpen}
        onSetHideScrollbar={setHideScrollbar}
      />
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
