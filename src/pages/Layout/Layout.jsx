import "./Layout.scss";
import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
    <nav className="navigation">
      <div className="nav__left">
      <NavLink  to="/" ><img  className="nav__logo" src="/images/shoe-logo.png" alt="shoe on fire" /><span className="nav__logo-text">SneakShoe
        </span></NavLink>
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
      <button className="cart">
        <img className="cart__img" src="/images/cart-icon.png" alt="shopping cart" />
      </button>
      </div>
    </nav>
    <Outlet />
    </>
  );
}

export default Layout;
