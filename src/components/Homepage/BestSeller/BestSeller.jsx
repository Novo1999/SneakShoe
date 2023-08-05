import { useState } from "react";
import "./BestSeller.scss";
import { sneakers } from "./SneakersData";

const bestSellerIndices = [1, 6, 5, 13, 7, 16];
const bestSellers = bestSellerIndices.map((item) => sneakers[item]);

function BestSeller() {
  const [currentSneaker, setCurrentSneaker] = useState(null);
  function handleMouseEnter(i) {
    setCurrentSneaker(i);
  }
  function handleMouseLeave() {
    setCurrentSneaker(null);
  }

  return (
    <section className="best__seller">
      <div className="best__seller-heading">
        <h1>Our Best Seller</h1>
      </div>
      <div className="best__seller-sneakers">
        {bestSellers.map((item, i) => {
          return (
            <div
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => handleMouseLeave(i)}
              className="best__seller-sneaker-container"
              key={item.name}
            >
              {item.discountedPrice && (
                <div className="best__seller-sneakers--sale">Sale!</div>
              )}
              <img src={item.img} alt="sneaker and shoe image" />

              <p
                className={`best__seller-sneakers--quick-view ${
                  currentSneaker === i ? "mouse-enter" : "mouse-leave"
                }`}
              >
                Quick View
              </p>

              <p className="best__seller-sneakers--name">{item.name}</p>
              <div className="best__seller-sneakers--price-section">
                <p className="best__seller-sneakers--discount">
                  {item.discountedPrice}
                </p>
                <p className="best__seller-sneakers--price">{item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default BestSeller;
