const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

/* USER REGISTER */

router.post("/register", async (req, res) => {
  try {
    /* Take information from the form */
    const { firstName, lastName, email, password, address } = req.body;

    /* Check if user exists */
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists!" });
    }

    /* Hass the password */
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    /* Create a new user */
    const newUser = {
      firstName,
      lastName,
      email,
      password: hashedPassword,
      address,
    };

    /* Save new User */
    const savedUser = await User.create(newUser);

    /* Send a success response */
    res
      .status(200)
      .json({ message: "User registered successfully!", user: savedUser });

    /* Handle any errors that occur during registration */
  } catch (err) {
    res
      .status(500)
      .json({ message: "Registration failed", error: err.message });
  }
});

/* USER LOG IN */
router.post("/login", async (req, res) => {
  try {
    /* Take information from the form */
    const { email, password } = req.body;

    /* Check if user exists */
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User doesn't exists!" });
    }

    /* Compare password */
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials!" });
    }

    /* Generate JWT token */
    const token = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    );
    delete user.password;
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
