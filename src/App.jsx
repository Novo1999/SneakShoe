import { Suspense, lazy } from "react";

import {
  Homepage,
  Layout,
  Men,
  Women,
  Collection,
  Lookbook,
  Sale,
  Story,
  Contact,
} from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Spinner from "./components/Spinner/Spinner";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";
// import Product from "./pages/Product/Product";

const Product = lazy(() => import("./pages/Product/Product"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <CartProvider>
            <ProductProvider>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Homepage />} />
                  <Route path="men" element={<Men />} />
                  <Route path="women" element={<Women />} />
                  <Route path="collection" element={<Collection />} />
                  <Route path="product/:id" element={<Product />} />
                  <Route path="lookbook" element={<Lookbook />} />
                  <Route path="sale" element={<Sale />} />
                  <Route path="our-story" element={<Story />} />
                  <Route path="contact" element={<Contact />} />
                </Route>
              </Routes>
            </ProductProvider>
          </CartProvider>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
