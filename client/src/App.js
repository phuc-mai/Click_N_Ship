import { Routes, Route, redirect } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./ScrollToTop";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductDetails from "./pages/ProductDetails";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import WishList from "./pages/WishList";

function App() {
  const user = true
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
          {/* {user ? redirect("/") : <Login />} */}
        <Route path="/register" element={<Register />} />
        <Route path="/products/:category?" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </>
  );
}

export default App;
