import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import Products from "../components/Products"
import "../styles/ProductListStyle/ProductList.scss"

const ProductList = () => {
  return (
    <>
      <Navbar />
      <div className="product-list">
        <h1>Dress</h1>
        <div className="product-list_optimize">
          <div className="product-list_optimize_filter">
            <h3>Filter Products:</h3>
            <select>
              <option>Color</option>
              <option>White</option>
              <option>Black</option>
              <option>Yellow</option>
              <option>Red</option>
              <option>Blue</option>
              <option>Green</option>
            </select>
            <select>
              <option>Size</option>
              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
              <option>XXL</option>
            </select>
          </div>

          <div>
            <h3>Sort Products:</h3>
            <select>
              <option>Newest</option>
              <option>Low to High</option>
              <option>High to Low</option>
            </select>
          </div>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </>
  )
}

export default ProductList