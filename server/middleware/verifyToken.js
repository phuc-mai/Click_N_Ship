const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) {
      return res.status(403).json({ message: "Access denied" });
    }
    if (token.startsWith("Bearer ")) {
      token = token.split(" ")[1];
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    const previousBody = req.body;

    req.body = Object.assign(previousBody, {
      verified,
    });

    next();

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user._id === req.params.id || req.user.isAdmin) {
      next()
    } else {
      res.status(403).json({ message: "You don't have permission to do that!" })
    }
  })
}

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next()
    } else {
      res.status(403).json({ message: "You don't have permission to do that!" })
    }
  })
}

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};