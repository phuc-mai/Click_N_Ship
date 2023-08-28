import { ShoppingCart, Search, FavoriteBorder } from "@mui/icons-material";
import "../styles/ProductsStyle/Products.scss";
import Product from "./Product";

import { useState, useEffect } from "react";
import axios from "axios";

const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const products = await axios.get(
          category
            ? `http://localhost:3001/products?category=${category}`
            : "http://localhost:3001/products"
        );
        setProducts(products.data);
      } catch (err) {}
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) => 
            item[key]?.includes(value)
          )
        )
      );
  }, [products, category, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "hightolow") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else if (sort === "lowtohigh") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <div className="products">
      {category
        ? filteredProducts.map((item) => (
           <Product item={item}/>
          ))
        : products.slice(0, 7).map((item) => (
            <Product item={item}/>
          ))}
    </div>
  );
};

export default Products;
