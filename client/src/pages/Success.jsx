import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { userRequest } from "../requestMethod";
import "../styles/SuccessStyle/success.scss"

const Success = () => {
  const location = useLocation()
  const data = location.state.stripeData
  const cart = location.state.cart
  const currentUser = useSelector((state) => state.user.currentUser)
  const [orderId, setOrderId] = useState(null)

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item.quantity,
          })),
          address: data.billing_details.address
        })
        data && setOrderId(res.data._id)
      } catch {}
    }
    createOrder()
  }, [cart, data, currentUser])
  return (
    <div className="success">
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfully. Your order is being prepared...`}
      <Link to="/">
        <button>Go to Homepage</button>
      </Link>
    </div>
  );
};

export default Success;
