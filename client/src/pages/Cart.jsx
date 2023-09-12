import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import "../styles/CartStyle/Cart.scss";
import variables from "../variables/Variables.module.scss";
import { userRequest } from "../requestMethod";
import { increaseQty, decreaseQty } from "../redux/cartRedux";

import { RemoveCircleOutline, AddCircleOutline } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";

const STRIPE_KEY = process.env.REACT_STRIPE_CHECKOUT;

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { stripeToken, setStripeToken } = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        navigate("/success", {
          stripeData: res.data,
          products: cart,
        });
      } catch {}
    };
    stripeToken && cart.total >= 1 && makeRequest();
  }, [stripeToken, cart.total]);

  return (
    <>
      <Navbar />
      <div className="cart">
        <h1>YOUR BAG</h1>
        <div className="cart_top">
          <Link to="/">
            <button>CONINUE SHOPPING</button>
          </Link>
          <div className="cart_top_right">
            {/* <p>Shopping Bag (2)</p>
            <p>Your Wishlist (0)</p> */}
          </div>
        </div>

        <div className="cart_bottom">
          <div className="cart_bottom_details">
            {cart.products?.map((item) => (
              <>
                <div className="cart_bottom_details_item">
                  <div className="cart_bottom_details_item_left">
                    <img src={`/assets/${item.img}`} alt="product" />
                    <div className="cart_bottom_details_item_left_info">
                      <div className="cart_bottom_details_item_left_info_type">
                        <h4>Product:</h4>
                        <p>{item.title}</p>
                      </div>
                      <div className="cart_bottom_details_item_left_info_type">
                        <h4>ID:</h4>
                        <p>{item._id}</p>
                      </div>
                      <div style={{ backgroundColor: item.color }} />
                      <div className="cart_bottom_details_item_left_info_type">
                        <h4>Size:</h4>
                        <p>{item.size}</p>
                      </div>
                    </div>
                  </div>

                  <div className="cart_bottom_details_item_right">
                    <div className="cart_bottom_details_item_right_quantity">
                      <RemoveCircleOutline
                        onClick={() => dispatch(decreaseQty({ id: item.id }))}
                        sx={{
                          fontSize: "35px",
                          cursor: "pointer",
                          "&:hover": { color: variables.lightred },
                        }}
                      />
                      <p>{item.quantity}</p>
                      <AddCircleOutline
                        onClick={() => dispatch(increaseQty({ id: item.id }))}
                        sx={{
                          fontSize: "35px",
                          cursor: "pointer",
                          "&:hover": { color: variables.lightred },
                        }}
                      />
                    </div>
                    <h2>$ {(item.price * item.quantity).toFixed(2)}</h2>
                  </div>
                </div>

                <hr />
              </>
            ))}
          </div>

          <div className="cart_bottom_summary">
            <h3>ORDER SUMARY</h3>
            <div className="cart_bottom_summary_item">
              <p>Subtotal</p>
              <p>$ {cart.total.toFixed(2)}</p>
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
              <p>$ {cart.total.toFixed(2)}</p>
            </div>

            <StripeCheckout
              name="Click N' Ship"
              image="/assets/logo.png"
              billingAddress
              shippingAddress
              description={`Your total is $ ${cart.total}`}
              amount={cart.total * 100}
              stripeKey={STRIPE_KEY}
              token={onToken}
            >
              <button>CHECK OUT NOW</button>
            </StripeCheckout>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Cart;
