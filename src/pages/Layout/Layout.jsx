import "./Layout.scss";
import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/men">Men</NavLink>
      <NavLink to="/women">Women</NavLink>
      <NavLink to="/collection">Collection</NavLink>
      <NavLink to="/lookbook">Lookbook</NavLink>
      <NavLink to="/sale">Sale</NavLink>
      <NavLink to="/our-story">Our Story</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <Outlet />
    </nav>
  );
}

export default Layout;
