const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middleware/verifyToken");

const User = require("../models/User");
const Product = require("../models/Product");

/* ADD PRODUCT TO WISHLIST */
router.patch("/:id/:productId", verifyToken, async (req, res) => {
  try {
    const { id, productId } = req.params;

    // Check if the user and product exist
    const user = await User.findById(id);
    const product = await Product.findById(productId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // New Logic
    const favoriteProduct = user.wishlist.find(((product) => product._id.toString() === productId));

    if(favoriteProduct) {
      user.wishlist =  user.wishlist.filter(((product) => product._id.toString() !== productId));
      await user.save();

      res.status(200).json({ message: "Product removed from wishlist", wishlist: user.wishlist });

    } else {
      user.wishlist.push(product);

      await user.save();

      res.status(200).json({ message: "Product added to wishlist",  wishlist: user.wishlist });
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({ error: err.message });
  }
});

/* READ */
router.get("/:id"),
  verifyTokenAndAdmin,
  async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      res.status(200).json(user);
    } catch (err) {
      return res
        .status(404)
        .json({ message: "User not found", error: err.message });
    }
  };

/* UPDATE */
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

/* DELETE */
router.delete(":/id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
