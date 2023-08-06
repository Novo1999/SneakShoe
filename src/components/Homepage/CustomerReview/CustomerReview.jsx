import { useCallback, useEffect, useState } from "react";
import Star from "./Stars";
import "./CustomerReview.scss";

const Reviews = [
  {
    name: "jullianne margolis",
    review:
      "“Felis semper duis massa scelerisque ac amet porttitor ac tellus venenatis aliquam varius mauris integer”",
    rating: 4,
    img: "/images/customer/customer-avatar-image-1.jpg",
  },
  {
    name: "luis adrian",
    review:
      "“Non malesuada fringilla non varius odio in id pellentesque aliquam volutpat sapien faucibus ”",
    rating: 5,
    img: "/images/customer/customer-avatar-image-2.jpg",
  },
  {
    name: "maria anna",
    review: "“Tortor suspendisse tincidunt accumsan platea pellentesque hac.”",
    rating: 5,
    img: "/images/customer/customer-avatar-image-3.jpg",
  },
];

function CustomerReview() {
  const [currentReview, setCurrentReview] = useState(0);
  const [curClicked, setCurClicked] = useState("");
  const [applyClass, setApplyClass] = useState(false);
  const [applyClass2, setApplyClass2] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(false);

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
    if (currentReview === 0) setCurrentReview(Reviews.length);
    setCurrentReview((cur) => cur - 1);
    setCurClicked("left");
  }
  function handleRight() {
    if (currentReview === Reviews.length - 1) {
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
            <Star quantity={Reviews[currentReview].rating} />
            <p className="customer__review-review">
              {Reviews[currentReview].review}
            </p>
            <div className="customer__review-customer">
              <img src={Reviews[currentReview].img} alt="customer image" />
              <p>{Reviews[currentReview].name}</p>
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
