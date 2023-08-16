const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middleware/verifyToken");

const Cart = require("../models/Cart");

/* CREATE */
router.post("/", verifyToken, async (req, res) => {
  try {
    const newCart = await Cart.create(req.body);
    const savedCart = await newCart.save()
    res.status(201).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
})

/* READ */
router.get("/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const { userId } = req.params
    const cart = await Cart.findOne({ userId })
    res.status(200).json(cart)
  } catch (err) {
    res.status(500).json(err);
  }
})

/* UPDATE */
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const { id } = req.params
    const updatedCart = await Cart.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    )
    res.status(200).json(updatedCart)
  } catch (err) {
    res.status(500).json(err);
  }
})

/* DELETE */
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const { id } = req.params
    const deletedCart = await Cart.findByIdAndDelete(id)
    if (!deletedCart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    res.status(200).json({ message: "Cart has been deleted!" })
  } catch (err) {
    res.status(500).json(err);
  }
})

/* GET ALL CARTS */
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find()
    res.status(200).json(carts)
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;
