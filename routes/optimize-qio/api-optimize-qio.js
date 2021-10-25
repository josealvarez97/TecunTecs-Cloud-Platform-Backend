const express = require("express");
const router = express.Router();

// Routes

/**
 * @swagger
 * /optimize-qio/number-partition:
 *    post:
 *      tags:
 *      - "Stretch Goal: Quantum-inspired Optimization"
 *      description: Use to solve Partial Differential Equations (PDE).
 *      responses:
 *        200:
 *          description: A successful response
 *
 *
 */
router.post("/heat-equation", (req, res) => {
  res.status(200).json({
    message: "Trapezoidal rule integration results.",
  });
});
