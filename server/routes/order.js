const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middleware/verifyToken");

const Order = require("../models/Order");

/* CREATE */
router.post("/", verifyToken, async (req, res) => {
  try {
    const newOrder = await Order.create(req.body)
    const savedOrder = await newOrder.save()
    res.status(200).json(savedOrder)
  } catch (err) {
    res.status(500).json(err);
  }
})

/* GET USER ORDERS*/
router.get("/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const { userId } = req.params
    const orders = await Order.find(userId)
    res.status(200).json(orders)
  } catch (err) {
    res.status(500).json(err);
  }
})

/* UPDATE */
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const { id } = req.params
    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    )
    res.status(200).json(updatedOrder)
  } catch (err) {
    res.status(500).json(err);
  }
})

/* DELETE */
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const { id } = req.params
    const deletedOrder = await Order.findByIdAndDelete(id)
    if (!deletedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json({ message: "Order has been deleted!" })
  } catch (err) {
    res.status(500).json(err);
  }
})

/* GET ALL ORDERS*/
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const orders = await Order.find()
    res.status(200).json(orders)
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;




