import { Link, useSearchParams } from "react-router-dom";
import { useProduct } from "../../context/ProductContext";

function ProductItem({ shoe, index }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    handleMouseEnter,
    handleMouseLeave,
    handleQuickView,
    productState,
    productDispatch,
  } = useProduct();

  function handleClick() {
    productDispatch({ type: "product/view", payload: shoe });
    // navigate("/product");
    setSearchParams(`/product/${shoe.id}`);
    window.scrollTo(-50, -50);
  }

  return (
    <div
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={() => handleMouseLeave()}
      className="best__seller-sneaker-container"
      key={shoe.name}
    >
      {shoe.discountedPrice && (
        <div className="best__seller-sneakers--sale">Sale!</div>
      )}
      <Link to={`/product/${shoe.id}`}>
        <img
          onClick={handleClick}
          src={shoe.img}
          alt="sneaker and shoe image"
        />
      </Link>

      <p
        onClick={() => handleQuickView(shoe)}
        className={`best__seller-sneakers--quick-view ${
          productState.currentSneaker === index ? "mouse-enter" : "mouse-leave"
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
}

export default ProductItem;
