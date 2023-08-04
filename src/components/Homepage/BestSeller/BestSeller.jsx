import { useEffect } from "react";
import "./BestSeller.scss";
const url = "https://sneakers-pricing.p.rapidapi.com/%7BPATH%7D";
const options = { method: "GET" };

function BestSeller() {
  async function fetchShoes() {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  fetchShoes();
  return (
    <section>
      <div className="best__seller-heading">
        <h1>Our Best Seller</h1>
      </div>
    </section>
  );
}

export default BestSeller;
