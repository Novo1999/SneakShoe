import { useCallback, useEffect, useState } from "react";
import Stars from "./Stars";
import "./CustomerReview.scss";
import { reviews } from "./ReviewsData";

function CustomerReview() {
  const [currentReview, setCurrentReview] = useState(0);
  const [curClicked, setCurClicked] = useState("");
  const [applyClass, setApplyClass] = useState(false);
  const [applyClass2, setApplyClass2] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(false);

  // Customer review button logic
  const handleCustomer = useCallback(
    (btn, classFunction) => {
      if (curClicked === btn) {
        setBtnDisabled(true);
        classFunction(true);
        const timeoutId = setTimeout(() => {
          classFunction(false);
          setCurClicked("");
          setBtnDisabled(false);
        }, 510);
        return () => clearTimeout(timeoutId);
      }
    },
    [curClicked]
  );

  useEffect(() => {
    handleCustomer("left", setApplyClass);
    handleCustomer("right", setApplyClass2);
  }, [handleCustomer]);

  function handleLeft() {
    if (currentReview === 0) setCurrentReview(reviews.length);
    setCurrentReview((cur) => cur - 1);
    setCurClicked("left");
  }
  function handleRight() {
    if (currentReview === reviews.length - 1) {
      setCurrentReview(0);
    } else setCurrentReview((cur) => cur + 1);
    setCurClicked("right");
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
            <Stars quantity={reviews[currentReview].rating} />
            <p className="customer__review-review">
              {reviews[currentReview].review}
            </p>
            <div className="customer__review-customer">
              <img src={reviews[currentReview].img} alt="customer image" />
              <p>{reviews[currentReview].name}</p>
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
