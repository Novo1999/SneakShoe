import "./CTA.scss";
import { Link } from "react-router-dom";
function CTA() {
  return (
    <section className="cta">
      <div className="cta__container">
        <img src="/images/CTA.jpg" alt="sneaker" />
        <div className="cta__container-details">
          <h2>Better for People & the Planet</h2>
          <p>
            Ut eget at et aliquam sit quis nisl, pharetra et ac pharetra est
            dictum in vulputate
          </p>
          <div className="cta__link">
            <Link className="hero__btn-men" to="men">
              shop men
            </Link>
            <Link className="hero__btn-men" to="women">
              shop women
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
