import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import "../styles/ProductDetailsStyle/ProductDetails.scss";
import variables from "../variables/Variables.module.scss";
import { addProduct } from "../redux/cartRedux";

import { RemoveCircleOutline, AddCircleOutline } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

const ProductDetails = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [selectedColor, setSelectedColor] = useState("")
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  const getProduct = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/products/${productId}`
      );
      const product = await response.data;
      setProduct(product);
    } catch {}
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleQuantity = (type) => {
    if (type === "decrease") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleAddToCart = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  
  return (
    <>
      <Navbar />
      <div className="productPage">
        <img src={`/assets/${product.img}`} alt="product" />
        <div className="productPage_details">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h2>$ {product.price} </h2>
          <div className="productPage_details_optimize">
            <div className="productPage_details_optimize_color">
              <h3>Colors</h3>
              {product.colors?.map((color) => (
                <div 
                  key={color}
                  onClick={() => {
                    setColor(color)
                    setSelectedColor(color)
                  }}
                  style={{ backgroundColor: color }}
                  className={`productPage_details_optimize_color_option ${selectedColor === color ? "selected" : ""}`}
                />
              ))}
            </div>
            <div className="productPage_details_optimize_size">
              <h3>Size</h3>
              <select onChange={(e) => setSize(e.target.value)}>
                {product.sizes?.map((size) => (
                  <option key={size}>{size}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="productPage_details_quantity">
            <RemoveCircleOutline
              onClick={() => handleQuantity("decrease")}
              sx={{
                fontSize: "35px",
                cursor: "pointer",
                "&:hover": { color: variables.lightred },
              }}
            />
            <p>{quantity}</p>
            <AddCircleOutline
              onClick={() => handleQuantity("increase")}
              sx={{
                fontSize: "35px",
                cursor: "pointer",
                "&:hover": { color: variables.lightred },
              }}
            />
          </div>

          <button onClick={handleAddToCart}>ADD TO CART</button>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default ProductDetails;
