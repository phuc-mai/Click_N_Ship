import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import "../styles/ProductStyle/Product.scss";
import variables from "../variables/Variables.module.scss";

import { RemoveCircleOutline, AddCircleOutline } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const ProductDetails = () => {
  return (
    <>
      <Navbar />
      <div className="product">
        <img src="assets/product-detail.jpg" alt="product" />
        <div className="product_details">
          <h1>Denim Jumpsuit</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </p>
          <h2>$ 20</h2>
          <div className="product_details_optimize">
            <div className="product_details_optimize_color">
              <h3>Color</h3>
              <div className="product_details_optimize_color_option" />
              <div className="product_details_optimize_color_option" />
              <div className="product_details_optimize_color_option" />
            </div>
            <div className="product_details_optimize_size">
              <h3>Size</h3>
              <select>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
              </select>
            </div>
          </div>

          <div className="product_details_quantity">
            <RemoveCircleOutline
              sx={{
                fontSize: "35px",
                cursor: "pointer",
                "&:hover": { color: variables.lightred },
              }}
            />
            <p>1</p>
            <AddCircleOutline
              sx={{
                fontSize: "35px",
                cursor: "pointer",
                "&:hover": { color: variables.lightred },
              }}
            />
          </div>

          <button>ADD TO CART</button>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default ProductDetails;
