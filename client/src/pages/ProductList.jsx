import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import Products from "../components/Products"
import "../styles/ProductListStyle/ProductList.scss"
import { useLocation } from "react-router-dom"
import { useState } from "react"

const ProductList = () => {
  const location = useLocation()
  const category = location.pathname.split("/")[2]
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState("newest")

  console.log(filters)
  
  const handleFilters = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <Navbar />
      <div className="product-list">
        <h1>{category.toUpperCase()}</h1>
        <div className="product-list_optimize">
          <div className="product-list_optimize_filter">
            <h3>Filter Products:</h3>
            <select name="colors" onChange={handleFilters}>
              <option disabled>Color</option>
              <option>White</option>
              <option>Black</option>
              <option>Yellow</option>
              <option>Red</option>
              <option>Blue</option>
              <option>Green</option>
            </select>
            <select name="sizes" onChange={handleFilters}>
              <option disabled>Size</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
              <option>X-Large</option>
            </select>
          </div>

          <div>
            <h3>Sort Products:</h3>
            <select onChange={(e) => setSort(e.target.value)}>
              <option value="newest">Newest</option>
              <option value="lowtohigh">Low to High</option>
              <option value="hightolow">High to Low</option>
            </select>
          </div>
        </div>
      </div>
      <Products category={category} filters={filters} sort={sort}/>
      <Newsletter />
      <Footer />
    </>
  )
}

export default ProductList