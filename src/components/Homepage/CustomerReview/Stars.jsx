import "./CustomerReview.scss";
function Star({ quantity }) {
  const stars = Array.from({ length: quantity }, (_, index) => {
    return <p key={index}>⭐</p>;
  });
  return <div className="customer__review-rating">{stars}</div>;
}

export default Star;
