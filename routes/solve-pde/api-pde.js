const express = require("express");
const router = express.Router();

// Routes

/**
 * @swagger
 * /solve-pde/heat-equation:
 *    post:
 *      tags:
 *      - Dynamical systems
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

/**
 * @swagger
 * /pde/laplace-equation:
 *    post:
 *      tags:
 *      - Dynamical systems
 *      description: Use to solve Partial Differential Equations (PDE).
 *      responses:
 *        200:
 *          description: A successful response
 *
 *
 */
router.post("/wave-equation", (req, res) => {
  res.status(200).json({
    message: "Trapezoidal rule integration results.",
  });
});

/**
 * @swagger
 * /pde/wave-equation:
 *    post:
 *      tags:
 *      - Dynamical systems
 *      description: Use to solve Partial Differential Equations (PDE).
 *      responses:
 *        200:
 *          description: A successful response
 *
 *
 */
router.post("/wave-equation", (req, res) => {
  res.status(200).json({
    message: "Trapezoidal rule integration results.",
  });
});

module.exports = router;
