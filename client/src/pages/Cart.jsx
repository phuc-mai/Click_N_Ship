import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import "../styles/CartStyle/Cart.scss";
import variables from "../variables/Variables.module.scss";

import { RemoveCircleOutline, AddCircleOutline } from "@mui/icons-material";

const Cart = () => {
  return (
    <>
      <Navbar />
      <div className="cart">
        <h1>YOUR BAG</h1>
        <div className="cart_top">
          <button>CONINUE SHOPPING</button>
          <div className="cart_top_right">
            <p>Shopping Bag (2)</p>
            <p>Your Wishlist (0)</p>
          </div>
        </div>

        <div className="cart_bottom">
          <div className="cart_bottom_details">
            <div className="cart_bottom_details_item">
              <div className="cart_bottom_details_item_left">
                <img src="assets/product-cart-02.png" alt="product" />
                <div className="cart_bottom_details_item_left_info">
                  <div className="cart_bottom_details_item_left_info_type">
                    <h4>Product:</h4>
                    <p>JESSIE THUNDER</p>
                  </div>
                  <div className="cart_bottom_details_item_left_info_type">
                    <h4>ID:</h4>
                    <p>93813718293</p>
                  </div>
                  <div />
                  <div className="cart_bottom_details_item_left_info_type">
                    <h4>Size:</h4>
                    <p>37</p>
                  </div>
                </div>
              </div>

              <div className="cart_bottom_details_item_right">
                <div className="cart_bottom_details_item_right_quantity">
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
                <h2>$ 15</h2>
              </div>
            </div>

            <hr />
            
            <div className="cart_bottom_details_item">
              <div className="cart_bottom_details_item_left">
                <img src="assets/product-cart-02.png" alt="product" />
                <div className="cart_bottom_details_item_left_info">
                  <div className="cart_bottom_details_item_left_info_type">
                    <h4>Product:</h4>
                    <p>JESSIE THUNDER</p>
                  </div>
                  <div className="cart_bottom_details_item_left_info_type">
                    <h4>ID:</h4>
                    <p>93813718293</p>
                  </div>
                  <div />
                  <div className="cart_bottom_details_item_left_info_type">
                    <h4>Size:</h4>
                    <p>37</p>
                  </div>
                </div>
              </div>

              <div className="cart_bottom_details_item_right">
                <div className="cart_bottom_details_item_right_quantity">
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
                <h2>$ 15</h2>
              </div>
            </div>
          </div>

          <div className="cart_bottom_summary">
            <h3>ORDER SUMARY</h3>
            <div className="cart_bottom_summary_item">
              <p>Subtotal</p>
              <p>$ 80</p>
            </div>
            <div className="cart_bottom_summary_item">
              <p>Estimated Shipping</p>
              <p>$ 5.90</p>
            </div>
            <div className="cart_bottom_summary_item">
              <p>Discount Shipping</p>
              <p>$ -5.90</p>
            </div>
            <div className="cart_bottom_summary_item">
              <p>Total</p>
              <p>$ 80</p>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Cart;
