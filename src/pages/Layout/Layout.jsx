import "./Layout.scss";
import { NavLink, Outlet } from "react-router-dom";
import { Cart, ProductAdded } from "../../components";
import { CartProvider, useCart } from "../../context/CartContext";
import Spinner from "../../components/Spinner/Spinner";
import ProductModal from "../../components/ProductModal/ProductModal";
import { ProductProvider, useProduct } from "../../context/ProductContext";

function Layout() {
  return (
    <CartProvider>
      <ProductProvider>
        <LayoutContent />
      </ProductProvider>
    </CartProvider>
  );
}

function LayoutContent() {
  const { productState } = useProduct();
  const { cartProducts, cartDispatch, cartState, handleCart } = useCart();
  return (
    <>
      {/* Modal Logic */}
      {productState.isOpened && productState.isLoading && <ProductModal />}
      <ProductAdded />
      <div
        className={`modal__bg ${
          cartState.isLoading || cartState.modalOpen ? "modal__open" : ""
        }`}
      >
        {cartState.isLoading && <Spinner />}
      </div>

      {/* Cart openning logic */}
      {cartState.overlayIsOpen && (
        <div
          className={`modal__bg ${
            cartState.overlayIsOpen ? "modal__open" : ""
          } `}
        ></div>
      )}
      <Cart dispatch={cartDispatch} state={cartState} />

      {/* Conditional sticky NAVBAR */}

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
        {/* <CTA />
        <Contact />
        <Footer /> */}
      </div>
    </>
  );
}

export default Layout;
