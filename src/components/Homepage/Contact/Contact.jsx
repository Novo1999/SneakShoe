import { Link } from "react-router-dom";
import "./Contact.scss";
function Contact() {
  return (
    <section className="contact">
      <div className="contact__container">
        <div className="contact__container-content">
          <img src="/images/contact-icons/padlock.png" alt="padlock" />
          <p>Secure Payment</p>
          <hr />
          <img src="/images/contact-icons/cargo-truck.png" alt="truck" />
          <p>Express Shipping</p>
          <hr />
          <img src="/images/contact-icons/product-return.png" alt="return" />
          <p>Free Return</p>
        </div>
      </div>
      <hr className="contact__main-line" />
      <div className="contact__container-content-second">
        <div>
          <h2 className="contact__brand">sneakshoe</h2>
          <p>
            Praesent eget tortor sit risus egestas nulla <br /> pharetra ornare
            quis bibendum est <br />
            bibendum sapien proin nascetur
          </p>
          <div className="contact__container-link-icons">
            <img src="/images/contact-icons/facebook.png" alt="facebook" />
            <img src="/images/contact-icons/instagram.png" alt="instagram" />
            <img src="/images/contact-icons/twitter.png" alt="twitter" />
            <img src="/images/contact-icons/pinterest.png" alt="pinterest" />
          </div>
        </div>
        <div>
          <h2 className="contact__beside-brand">Shop</h2>
          <div className="contact__links">
            <Link to="men">shop men</Link>
            <Link to="women">shop women</Link>
            <Link to="lookbook">lookbook</Link>
            <Link to="#">gift card</Link>
            <Link to="sale">sale</Link>
          </div>
        </div>
        <div>
          <h2 className="contact__beside-brand">About</h2>
          <div className="contact__links">
            <Link to="our-story">our story</Link>
            <Link to="">our materials</Link>
            <Link to="">our value</Link>
            <Link to="">sustainability</Link>
            <Link to="">manufacture</Link>
          </div>
        </div>
        <div>
          <h2 className="contact__beside-brand">Need Help?</h2>
          <div className="contact__links">
            <Link to="men">FAQs</Link>
            <Link to="">shipping & returns</Link>
            <Link to="">shoe care</Link>
            <Link to="">size chart</Link>
            <Link to="">contact us</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
