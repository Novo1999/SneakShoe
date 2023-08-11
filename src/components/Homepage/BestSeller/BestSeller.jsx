import { useEffect, useReducer } from "react";
import "./BestSeller.scss";
import { sneakers } from "./SneakersData";
import { useProduct } from "../../../context/ProductContext";

const bestSellerIndices = [1, 6, 5, 13, 7, 16];
const bestSellers = bestSellerIndices.map((item) => sneakers[item]);

function BestSeller() {
  const { handleMouseEnter, handleMouseLeave, handleQuickView, productState } =
    useProduct();
  return (
    <section className="best__seller">
      <div className="best__seller-heading">
        <h1>Our Best Seller</h1>
      </div>
      <div className="best__seller-sneakers">
        {bestSellers.map((shoe, i) => {
          return (
            <div
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => handleMouseLeave()}
              className="best__seller-sneaker-container"
              key={shoe.name}
            >
              {shoe.discountedPrice && (
                <div className="best__seller-sneakers--sale">Sale!</div>
              )}
              <img src={shoe.img} alt="sneaker and shoe image" />

              <p
                onClick={() => handleQuickView(shoe)}
                className={`best__seller-sneakers--quick-view ${
                  productState.currentSneaker === i
                    ? "mouse-enter"
                    : "mouse-leave"
                }`}
              >
                Quick View
              </p>

              <p className="best__seller-sneakers--name">{shoe.name}</p>
              <div className="best__seller-sneakers--price-section">
                <p className="best__seller-sneakers--discount">
                  {shoe.discountedPrice}
                </p>
                <p className="best__seller-sneakers--price">{shoe.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default BestSeller;
