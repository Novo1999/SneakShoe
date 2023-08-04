import "./Homepage.scss";
import { Hero, Branding, About, HowShoes, BestSeller,NewArrivals, CTA,Contact, Gender, Recycle, CustomerReview, Footer } from "../../components";
function Homepage() {
  return <div>
    <Hero/>
    <Branding />
    <About />
    <HowShoes />
    <BestSeller />
    <Gender />
    <NewArrivals />
    <Recycle />
    <CustomerReview />
    <CTA />
    <Contact />
    <Footer />
  </div>;
}

export default Homepage;
