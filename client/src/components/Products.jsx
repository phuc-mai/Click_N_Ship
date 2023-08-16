import { ShoppingCart, Search, FavoriteBorder } from "@mui/icons-material";

import { popularProducts } from "../data";
import "../styles/ProductsStyle/Products.scss";
import { IconButton } from "@mui/material";

const Products = () => {
  return (
    <div className="products">
      {popularProducts.map((item) => (
        <div className="products_item" key={item.id}>
          <img src={item.img} alt="product" />
          <div className="products_item_icons">
            <div className="products_item_icons_icon">
              <ShoppingCart />
            </div>
            <div className="products_item_icons_icon">
              <Search />
            </div>
            <div className="products_item_icons_icon">
              <FavoriteBorder />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
