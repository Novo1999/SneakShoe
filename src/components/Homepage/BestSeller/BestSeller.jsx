import ProductItem from "../../ProductItem/ProductItem";
import "./BestSeller.scss";
// import { sneakers } from "./SneakersData";
import sneakersData from "../../../../data/sneakers.json";

const sneakers = JSON.parse(JSON.stringify(sneakersData));

// Random Items as Best Seller
const bestSellerIndices = [1, 6, 5, 13, 7, 16];
const bestSellers = bestSellerIndices.map((item) => sneakers[item]);

function BestSeller() {
  return (
    <section className="best__seller">
      <div className="best__seller-heading">
        <h1>Our Best Seller</h1>
      </div>
      <div className="best__seller-sneakers">
        {bestSellers.map((shoe, i) => {
          return <ProductItem shoe={shoe} key={i} index={i} />;
        })}
      </div>
    </section>
  );
}

export default BestSeller;
