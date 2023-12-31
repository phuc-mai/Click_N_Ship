import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import "../styles/CartStyle/Cart.scss";
import variables from "../variables/Variables.module.scss";
import { userRequest } from "../requestMethod";
import { increaseQty, decreaseQty, removeFromCart } from "../redux/cartRedux";

import { RemoveCircleOutline, AddCircleOutline } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";

const STRIPE_KEY = process.env.REACT_APP_STRIPE_CHECKOUT;
const Cart = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.user.currentUser.user.wishlist);

  const [ stripeToken, setStripeToken ] = useState(null);
  

  const totalPrice = cart.products.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("https://clicknshipserver.phucmai.com/checkout/payment", {
          tokenId: stripeToken.id,
          amount: parseInt(totalPrice),
        });
        navigate("/success", {state:{
          stripeData: res.data,
          products: cart,
        }});
      } catch (err) {console.log(err)}
    };
    stripeToken && makeRequest();
  }, [stripeToken]);

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
            <p>Shopping Bag ({cart.products?.length})</p>
            <p>Your Wishlist ({wishlist?.length})</p> 
          </div>
        </div>

        <div className="cart_bottom">
          <div className="cart_bottom_details">
            {cart.products?.map((item) => (
              <Link to={`/product/${item._id}`}>
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
                        onClick={() => dispatch(decreaseQty({ id: item._id }))}
                        sx={{
                          fontSize: "35px",
                          cursor: "pointer",
                          "&:hover": { color: variables.lightred },
                        }}
                      />
                      <p>{item.quantity}</p>
                      <AddCircleOutline
                        onClick={() => dispatch(increaseQty({ id: item._id }))}
                        sx={{
                          fontSize: "35px",
                          cursor: "pointer",
                          "&:hover": { color: variables.lightred },
                        }}
                      />
                    </div>
                    <button onClick={() => dispatch(removeFromCart({ id: item._id }))}>Remove</button>
                    <h2>$ {(item.price * item.quantity).toFixed(2)}</h2>
                  </div>
                </div>

                <hr />
              </Link>
            ))}
          </div>

          <div className="cart_bottom_summary">
            <h3>ORDER SUMARY</h3>
            <div className="cart_bottom_summary_item">
              <p>Subtotal</p>
              <p>$ {totalPrice.toFixed(2)}</p>
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
              <p>$ {totalPrice.toFixed(2)}</p>
            </div>

            <StripeCheckout
              name="Click N' Ship"
              image="/assets/logo.png"
              billingAddress
              shippingAddress
              description={`Your total is $ ${totalPrice}`}
              amount={totalPrice * 100}
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
