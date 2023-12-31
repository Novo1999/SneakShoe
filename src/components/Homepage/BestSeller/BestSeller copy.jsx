import { useEffect, useReducer } from "react";
import "./BestSeller.scss";
import { sneakers } from "./SneakersData";
import { useCart } from "../../../context/CartContext";

const bestSellerIndices = [1, 6, 5, 13, 7, 16];
const bestSellers = bestSellerIndices.map((item) => sneakers[item]);

const initialState = {
  currentSneaker: null,
  isOpened: false,
  currentSneakerObject: {},
  overlayIsOpen: false,
  isLoading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "quickView":
      return {
        ...state,
        isOpened: true,
        currentSneakerObject: action.payload,
        overlayIsOpen: true,
      };
    case "mouseEnter":
      return {
        ...state,
        currentSneaker: action.payload,
      };
    case "mouseLeave":
      return {
        ...state,
        currentSneaker: null,
      };
    case "closeModal":
      return {
        ...state,
        currentSneaker: null,
        isOpened: false,
        currentSneakerObject: {},
        overlayIsOpen: false,
      };
    default:
      throw new Error("Unknown Action");
  }
};

function BestSeller() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isAddedToCart, cartDispatch, cartState } = useCart();

  useEffect(() => {
    if (isAddedToCart) dispatch({ type: "closeModal" });
    cartDispatch({ type: "stickyNav", payload: true });
  }, [isAddedToCart, cartDispatch]);

  function handleQuickView(item) {
    setTimeout(() => {
      dispatch({
        type: "quickView",
        payload: item,
      });
      cartDispatch({
        type: "openModal",
        payload: true,
      });
    }, 600);
    cartDispatch({ type: "isLoading", payload: true });
    cartDispatch({ type: "stickyNav", payload: false });
  }

  useEffect(() => {
    if (cartState.modalOpen)
      cartDispatch({ type: "isLoading", payload: false });
  }, [cartDispatch, cartState.modalOpen]);

  function handleMouseEnter(i) {
    dispatch({ type: "mouseEnter", payload: i });
  }
  function handleMouseLeave() {
    dispatch({ type: "mouseLeave" });
  }

  useEffect(() => {
    const html = document.documentElement;
    if (state.isOpened) html.classList.add("hide-scrollbar");
    else html.classList.remove("hide-scrollbar");
  }, [state.isOpened]);

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
                  state.currentSneaker === i ? "mouse-enter" : "mouse-leave"
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
