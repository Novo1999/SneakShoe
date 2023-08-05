import { useEffect, useState } from "react";
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

  useEffect(() => {
    if (curClicked === "left") {
      setApplyClass(true);
      const timeoutId = setTimeout(() => {
        setApplyClass(false);
        setCurClicked("");
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [curClicked]);

  useEffect(() => {
    if (curClicked === "right") {
      setApplyClass2(true);
      const timeoutId = setTimeout(() => {
        setApplyClass2(false);
        setCurClicked("");
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [curClicked]);

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
        <button onClick={handleLeft}>&larr;</button>
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
        <button onClick={handleRight}>&rarr;</button>
      </div>
      <p className="customer__review-bottom-text">
        4.8 average rating from 1814 reviews
      </p>
    </section>
  );
}

export default CustomerReview;
