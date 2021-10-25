const express = require("express");
const router = express.Router();

// Routes

/**
 * @swagger
 * /solve-cfd/navier-stokes:
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
router.post("/navier-stokes", (req, res) => {
  res.status(200).json({
    message: "Trapezoidal rule integration results.",
  });
});
