const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middleware/verifyToken");

const User = require("../models/User");

/* READ */
router.get("/:id"), verifyTokenAndAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id)
    res.status(200).json(user)
  } catch (err) {
    return res
      .status(404)
      .json({ message: "User not found", error: err.message });
  }
}

/* UPDATE */
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const { id } = req.params
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    )

    res.status(200).json(updatedUser)
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
})

/* DELETE */
router.delete(":/id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const { id } = req.params
    const deletedUser = await User.findByIdAndDelete(id)
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' })
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
})

module.exports = router;
