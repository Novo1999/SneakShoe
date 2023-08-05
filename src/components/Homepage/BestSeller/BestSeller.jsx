import "./BestSeller.scss";
import { sneakers } from "./SneakersData";

const bestSellerIndex = [1, 6, 5, 13, 7, 16];

bestSellerIndex.map((item) => console.log(sneakers[item]));

function BestSeller() {
  return (
    <section>
      <div className="best__seller-heading">
        <h1>Our Best Seller</h1>
      </div>
    </section>
  );
}

export default BestSeller;
