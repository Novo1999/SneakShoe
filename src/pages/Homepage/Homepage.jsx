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

function Homepage() {
  return (
    <main className="homepage">
      <Hero />
      <Branding />
      <About />
      <HowShoes />
      <BestSeller />
      <Gender />
      <Recycle />
      <CustomerReview />
      {/* <Cart /> */}
      {/* <NewArrivals /> */}
    </main>
  );
}

export default Homepage;
