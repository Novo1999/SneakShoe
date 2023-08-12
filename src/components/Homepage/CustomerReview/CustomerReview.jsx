import { useCallback, useEffect, useReducer } from "react";
import Stars from "./Stars";
import "./CustomerReview.scss";
import { reviews } from "./ReviewsData";

const initialState = {
  currentReviewIndex: 0,
  curClicked: "",
  applyClass: false,
  applyClass2: false,
  btnDisabled: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "button/disabled":
      return { ...state, btnDisabled: action.payload };
    case "clicked/current":
      return { ...state, curClicked: action.payload };
    case "reviews/current":
      return { ...state, currentReviewIndex: action.payload };
    case "applyClass/left":
      return { ...state, applyClass: action.payload };
    case "applyClass/right":
      return { ...state, applyClass2: action.payload };
    default:
      throw new Error("Unknown action type");
  }
}

function CustomerReview() {
  const [
    { currentReviewIndex, curClicked, applyClass, applyClass2, btnDisabled },
    dispatch,
  ] = useReducer(reducer, initialState);

  // Customer review button logic and animation effect
  const handleCustomer = useCallback(
    (btn) => {
      if (curClicked === btn) {
        dispatch({ type: "button/disabled", payload: true });
        dispatch({ type: `applyClass/${btn}`, payload: true });
        const timeoutId = setTimeout(() => {
          dispatch({ type: `applyClass/${btn}`, payload: false });
          dispatch({ type: "clicked/current", payload: "" });
          dispatch({ type: "button/disabled", payload: false });
        }, 530);
        return () => clearTimeout(timeoutId);
      }
    },
    [curClicked]
  );

  useEffect(() => {
    handleCustomer("left");
    handleCustomer("right");
  }, [handleCustomer]);

  function handleLeft() {
    let newIndex = currentReviewIndex - 1;
    if (newIndex < 0) {
      newIndex = reviews.length - 1;
    }
    dispatch({ type: "reviews/current", payload: newIndex });

    dispatch({ type: "clicked/current", payload: "left" });
  }
  function handleRight() {
    if (currentReviewIndex === reviews.length - 1) {
      dispatch({ type: "reviews/current", payload: 0 });
    } else {
      dispatch({ type: "reviews/current", payload: currentReviewIndex + 1 });
    }
    dispatch({ type: "clicked/current", payload: "right" });
  }

  return (
    <section className="customer__review">
      <h2>Our Customers Speak for Us</h2>
      <div className="customer__review-outside">
        <button onClick={btnDisabled ? () => {} : handleLeft}>&larr;</button>
        <div className="customer__review-container">
          <div
            className={`customer__review-content ${
              applyClass ? "slide-left" : ""
            } ${applyClass2 ? "slide-right" : ""}`}
          >
            <Stars quantity={reviews[currentReviewIndex].rating} />
            <p className="customer__review-review">
              {reviews[currentReviewIndex].review}
            </p>
            <div className="customer__review-customer">
              <img src={reviews[currentReviewIndex].img} alt="customer image" />
              <p>{reviews[currentReviewIndex].name}</p>
            </div>
            <div id="customer__review-btns"></div>
          </div>
        </div>
        <button onClick={btnDisabled ? () => {} : handleRight}>&rarr;</button>
      </div>
      <p className="customer__review-bottom-text">
        4.8 average rating from 1814 reviews
      </p>
    </section>
  );
}

export default CustomerReview;
