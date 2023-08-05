import "./Footer.scss";
function Footer() {
  return (
    <section className="footer">
      <p>&copy; 2023 SneakShoe. Powered by SneakShoe Store</p>
      <a href="https://github.com/Novo1999">
        <img className="git" src="/images/github.png" alt="github" />
      </a>
      <img src="/images/payment-icons.png" alt="payment" />
    </section>
  );
}

export default Footer;
