import { Link } from "react-router-dom";
import "./About.scss";
function About() {
  return (
    <section className="about">
      <div className="about__img">
        <img src="images/sneaker/sneaker-2.jpg" alt="man wearing a sneaker" />
      </div>
      <div className="about__text">
        <p className="about__text-heading">about us</p>
        <p className="about__text-subheading">
          Selected materials <br /> designed for comfort <br /> and
          sustainability
        </p>
        <p className="about__text-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
          harum laboriosam commodi odio eum quasi aliquid ad quia quo. Ipsum.
        </p>
        <Link className="read__more" to="/our-story">
          Read More
        </Link>
      </div>
    </section>
  );
}

export default About;
