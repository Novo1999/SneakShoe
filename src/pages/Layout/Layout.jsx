import "./Layout.scss";
import { NavLink, Outlet } from "react-router-dom";
import { Cart, ProductAdded } from "../../components";
import { CTA, Contact, Footer } from "../../components";
import { CartProvider, useCart } from "../../context/CartContext";

function Layout() {
  return (
    <CartProvider>
      <LayoutContent />
    </CartProvider>
  );
}

function LayoutContent() {
  const { cartProducts, cartDispatch, cartState, handleCart } = useCart();
  return (
    <>
      <ProductAdded />
      {cartState.overlayIsOpen && <div className="modal__bg"></div>}
      <Cart dispatch={cartDispatch} state={cartState} />
      <nav className={`navigation ${cartState.isSticky ? "nav-sticky" : ""}`}>
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
            <p className="nav__cart__quantity">{cartProducts.length}</p>
          </button>
        </div>
      </nav>
      <Outlet />
      <div className="page__bottom">
        <CTA />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default Layout;
