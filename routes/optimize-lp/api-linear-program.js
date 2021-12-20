const express = require("express");
const router = express.Router();

// Routes

/**
 * //@swagger
 * /optimize-lp/production-plan:
 *    post:
 *      tags:
 *      - Mathematical Optimization
 *      description: Use to solve single variable integration.
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

/**
 * //@swagger
 * /optimize-lp/media-selection:
 *    post:
 *      tags:
 *      - Mathematical Optimization
 *      description: Use to solve single variable integration.
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

/**
 * //@swagger
 * /optimize-lp/max-flow:
 *    post:
 *      tags:
 *      - Mathematical Optimization
 *      description: Use to solve single variable integration.
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

/**
 * //@swagger
 * /optimize-lp/transportation:
 *    post:
 *      tags:
 *      - Mathematical Optimization
 *      description: Use to solve single variable integration.
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

/**
 * //@swagger
 * /optimize-lp/assignment:
 *    post:
 *      tags:
 *      - Mathematical Optimization
 *      description: Use to solve single variable integration.
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
