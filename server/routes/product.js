const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middleware/verifyToken");

const Product = require("../models/Product");

/* CREATE */
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    const savedProduct = await newProduct.save()
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
})

/* GET PRODUCT */
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params
    const product = await Product.findById(id)
    res.status(200).json(product)
  } catch (err) {
    res.status(500).json(err);
  }
})

/* GET ALL PRODUCTS */
router.get("/", async (req, res) => {
  try {
    const products = await Product.find()
    res.status(200).json(products)
  } catch (err) {
    res.status(500).json(err);
  }
})

/* UPDATE */
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const { id } = req.params
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    )
    res.status(200).json(updatedProduct)
  } catch (err) {
    res.status(500).json(err);
  }
})

/* DELETE */
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const { id } = req.params
    const deletedProduct = await Product.findByIdAndDelete(id)
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: "Product has been deleted!" })
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;
