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

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="men" element={<Men />} />
            <Route path="women" element={<Women />} />
            <Route path="collection" element={<Collection />} />
            <Route path="lookbook" element={<Lookbook />} />
            <Route path="sale" element={<Sale />} />
            <Route path="our-story" element={<Story />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
