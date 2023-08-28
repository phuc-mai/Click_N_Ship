import { ShoppingCart, Search, FavoriteBorder } from "@mui/icons-material";
import "../styles/ProductStyle/Product.scss";

const Product = ({ item }) => {
  return (
    <div className="product" key={item._id}>
      <img src={`/assets/${item.img}`} alt="product" />
      <div className="product_icons">
        <div className="product_icons_icon">
          <ShoppingCart />
        </div>
        <div className="product_icons_icon">
          <a href={`/product/${item._id}`}>
            <Search />
          </a>
        </div>
        <div className="product_icons_icon">
          <FavoriteBorder />
        </div>
      </div>
    </div>
  );
};

export default Product;
