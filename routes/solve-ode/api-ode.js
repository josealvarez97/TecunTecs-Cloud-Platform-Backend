const express = require("express");
const router = express.Router();

// Routes

/**
 * //@swagger
 * /solve-ode:
 *    post:
 *      tags:
 *      - Dynamical systems
 *      description: Use to solve Ordinary Differential Equations (ODE).
 *      responses:
 *        200:
 *          description: A successful response
 *
 *
 */
router.post("/", (req, res) => {
  res.status(200).json({
    message: "Not implemented.",
  });
});

module.exports = router;
