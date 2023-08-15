import "./Homepage.scss";
import {
  Hero,
  Branding,
  About,
  HowShoes,
  BestSeller,
  NewArrivals,
  Gender,
  Recycle,
  CustomerReview,
} from "../../components";
import Product from "../Product/Product";
import { useCallback, useEffect } from "react";
import { useCart } from "../../contexts/CartContext";

function Homepage() {
  const { cartDispatch } = useCart();
  // Making the Navbar Sticky on Scroll

  const handleScroll = useCallback(() => {
    function handleScroll() {
      if (window.scrollY > 700 && window.scrollY < 6200) {
        cartDispatch({ type: "nav/sticky", payload: true });
      } else {
        cartDispatch({ type: "nav/sticky", payload: false });
      }
    }
    handleScroll();
  }, [cartDispatch]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <main onScroll={handleScroll} className="homepage">
      <Hero />
      <Branding />
      <About />
      <HowShoes />
      <BestSeller />
      <Gender />
      <Recycle />
      <CustomerReview />
      {/* <Product /> */}
      {/* <Cart /> */}
      {/* <NewArrivals /> */}
    </main>
  );
}

export default Homepage;
