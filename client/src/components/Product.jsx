import { ShoppingCart, FavoriteBorder, Favorite } from "@mui/icons-material";
import "../styles/ProductStyle/Product.scss";
import variables from "../variables/Variables.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setWishlist } from "../redux/userRedux";

const Product = ({ item }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  const isLiked = currentUser?.user?.wishlist?.find(
    (product) => product._id === item._id
  );

  const patchWishlist = async () => {
    const response = await fetch(
      `http://localhost:3001/users/${currentUser.user._id}/${item._id}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${currentUser.token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    dispatch(setWishlist(data.wishlist));
  };
  return (
    <div className="product" key={item._id}>
      <img src={`/assets/${item.img}`} alt="product" />
      <div className="product_icons">
        <a href={`/product/${item._id}`}>
          <ShoppingCart />
        </a>
        <a onClick={() => patchWishlist()}>
          {isLiked ? (
            <Favorite sx={{ color: variables.lightred }} />
          ) : (
            <FavoriteBorder />
          )}
        </a>
      </div>
    </div>
  );
};

export default Product;
