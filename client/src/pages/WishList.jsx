import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import "../styles/WishlistStyle/wishlist.scss";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const WishList = () => {
  const wishlist = useSelector((state) => state.user.currentUser.user.wishlist);
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <Navbar />

      <div className="wishlist">
        <h1>YOUR WISHLIST</h1>

        <div className="wishlist_top">
          <Link to="/">
            <button>CONINUE SHOPPING</button>
          </Link>
          <div className="wishlist_top_right">
            <p>Shopping Bag ({cart.products?.length})</p>
            <p>Your Wishlist ({wishlist?.length})</p>
          </div>
        </div>

        <div className="wishlist_bottom">
          {wishlist?.map((item) => (
            <Link to={`/product/${item._id}`}>
              <div className="wishlist_bottom_item">
                <img src={`/assets/${item.img}`} alt="product" />
                <div className="wishlist_bottom_item_info">
                  <div className="wishlist_bottom_item_info_details">
                    <h4>Product:</h4>
                    <p>{item.title}</p>
                  </div>

                  <div className="wishlist_bottom_item_info_details">
                    <h4>ID:</h4>
                    <p>{item._id}</p>
                  </div>
                </div>
              </div>
              <hr style={{ height: "1px", marginTop: "20px" }}/>
            </Link>
          ))}
        </div>
      </div>

      <Newsletter />
      <Footer />
    </>
  );
};

export default WishList;
