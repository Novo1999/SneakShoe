import ModalContent from "../../components/ModalContent/ModalContent";
import ProductItem from "../../components/ProductItem/ProductItem";
import "./Product.scss";
import { sneakers } from "../../components/Homepage/BestSeller/SneakersData";
import { useParams, useSearchParams } from "react-router-dom";
import { useProduct } from "../../context/ProductContext";

const bestSellerIndices = [1, 6, 5];
const bestSellers = bestSellerIndices.map((item) => sneakers[item]);

function Product() {
  return (
    <>
      <div className="product">
        <div className="product__container">
          <section className="product__container-content">
            <ModalContent />
          </section>
          <hr />
          <section className="product__review">
            <div className="product__review-button">
              <button>Description</button>
              <button>Reviews (0)</button>
            </div>
            <div className="product__review-content">
              <p>
                Auctor eros suspendisse tellus venenatis sodales purus non
                pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar
                odio feugiat consectetur egestas magna pharetra cursus risus,
                lectus enim eget eu et lobortis faucibus. <br />
                <br />
                Eget odio justo ut scelerisque purus non aliquam adipiscing amet
                condimentum ligula diam erat sodales pharetra accumsan
                pellentesque at sem at eget ac hendrerit odio enim felis sit
                augue lorem egestas dictum vestibulum a etiam nisi, elit augue{" "}
                <br />
                <br />
                volutpat porta scelerisque nullam at leo faucibus cursus metus.
                Viverra nunc iaculis id sed diam nam quam id sapien pellentesque
                quam sed eu augue id ac tempus aliquam facilisis vivamus eget
                nisi id.
              </p>
            </div>
          </section>
          <section>
            <h2>Related products</h2>
            <div className="product__related">
              {bestSellers.map((item, i) => {
                return <ProductItem shoe={item} key={i} index={i} />;
              })}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Product;
