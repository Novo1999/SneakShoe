import "./Homepage.scss";
import {
  Hero,
  Branding,
  About,
  HowShoes,
  BestSeller,
  NewArrivals,
  CTA,
  Contact,
  Gender,
  Recycle,
  CustomerReview,
  Footer,
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
      <CTA />
      <Contact />
      <Footer />
      {/* <Cart /> */}
      {/* <NewArrivals /> */}
    </main>
  );
}

export default Homepage;
