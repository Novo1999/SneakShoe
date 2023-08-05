import { Link } from "react-router-dom";
import "./Gender.scss";
import { useState } from "react";
function Gender() {
  const [isHovered, setIsHovered] = useState("");

  function hoverOverlay(e) {
    e.currentTarget.classList.contains("gender__container-man") &&
      setIsHovered("man");
    e.currentTarget.classList.contains("gender__container-woman") &&
      setIsHovered("woman");
  }
  function unHoverOverlay() {
    setIsHovered("");
  }

  return (
    <section className="gender">
      <div className="gender__container">
        <div
          className="gender__container-man"
          onMouseEnter={(e) => hoverOverlay(e)}
          onMouseLeave={unHoverOverlay}
        >
          <div
            className={`gender__container-man-overlay ${
              isHovered === "man" ? "enable" : "disable"
            }`}
          ></div>
          <img src="/images/gender/man-shoe.jpg" alt="woman wearing sneaker" />
          <div className="gender__container-man-title">
            <h2>men</h2>
            <Link className="gender__container-link" to="/men">
              shop men
            </Link>
          </div>
        </div>
        <div
          className="gender__container-woman"
          onMouseEnter={(e) => hoverOverlay(e)}
          onMouseLeave={unHoverOverlay}
        >
          <div
            className={`gender__container-woman-overlay ${
              isHovered === "woman" ? "enable" : "disable"
            }`}
          ></div>
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
