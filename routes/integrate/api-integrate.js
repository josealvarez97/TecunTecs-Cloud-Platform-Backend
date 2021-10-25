const express = require("express");
const router = express.Router();

// Routes

/**
 * @swagger
 * /integrate:
 *    post:
 *      tags:
 *      - Dynamical systems
 *      description: Use to solve single variable integration.
 *      responses:
 *        200:
 *          description: A successful response
 *
 *
 */
router.post("/", (req, res) => {
  res.status(200).json({
    message: "Trapezoidal rule integration results.",
  });
});

module.exports = router;
