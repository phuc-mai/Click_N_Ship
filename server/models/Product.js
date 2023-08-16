const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true
    },
    description: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    categories: {
      type: Array
    },
    sizes: {
      type: Array
    },
    colors: {
      type: Array
    },
    price: {
      type: Number,
      required: true
    },
    inStock: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
)

const Product = mongoose.model("Product", ProductSchema)

module.exports = Product;
