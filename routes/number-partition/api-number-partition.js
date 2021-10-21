const express = require("express");
const router = express.Router();

// Routes
/**
 * @swagger
 * /number-partition:
 *  post:
 *      description: Use to solve Number Partitioning Problem
 *      responses:
 *          '200':
 *              description: A successful response
 */
router.post("/", (req, res) => {
  res.status(200).json({ message: "Number Partitioning Problem results" });
});

module.exports = router;
