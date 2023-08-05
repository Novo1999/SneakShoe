import { Link } from "react-router-dom";
import "./Gender.scss";
function Gender() {
  return (
    <section className="gender">
      <div className="gender__container">
        <div className="gender__container-man">
          <div className="gender__container-man-overlay"></div>
          <img src="/images/gender/man-shoe.jpg" alt="woman wearing sneaker" />
          <div className="gender__container-man-title">
            <h2>men</h2>
            <Link className="gender__container-link" to="/men">
              shop men
            </Link>
          </div>
        </div>
        <div className="gender__container-woman">
          <div className="gender__container-woman-overlay"></div>
          <img
            src="/images/gender/woman-shoe.jpg"
            alt="woman wearing sneaker"
          />
          <div className="gender__container-woman-title">
            <h2>women</h2>
            <Link className="gender__container-link" to="women">
              shop woman
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gender;
