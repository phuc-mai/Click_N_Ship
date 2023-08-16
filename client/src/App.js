import { Routes, Route } from "react-router-dom";

import "./App.css";
import ScrollToTop from "./ScrollToTop";
import Home from "./pages/Home";
import LoginRegister from "./pages/LoginRegister";
import ProductDetails from "./pages/ProductDetails";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/login" element={<LoginRegister />} />
        <Route index path="/register" element={<LoginRegister />} />
        <Route index path="/all-products" element={<ProductList />} />
        <Route index path="/product" element={<ProductDetails />} />
        <Route index path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
