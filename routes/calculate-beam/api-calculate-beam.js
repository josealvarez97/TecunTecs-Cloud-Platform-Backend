// Libraries
const express = require("express");
const router = express.Router();
const axios = require("axios");
// Secrets
const secrets = require("../../secrets.json");
const projectId = secrets.GCLOUD_PROJECT_ID;
const projectLocation = secrets.GCLOUD_PROJECT_LOCATION;

/**
 * @swagger
 * /calculate-beam/steel-area:
 *  post:
 *      tags:
 *      - "Energy Management"
 *      responses:
 *          200:
 *              description: A successfl response
 */
router.post("/steel-area", (req, res) => {
  const { fc, fy, b, h, c, M } = req.body;

  const d = h - c;

  const As =
    (0.85 * b * d * fc) / fy -
    Math.sqrt(
      ((0.85 * b * d * fc) / fy) ** 2 - (1.88889 * M * 100 * fc * b) / fy ** 2
    );

  const Asmin = (14.1 / fy) * b * h;
  const pBal = 0.85 ** 2 * (fc / fy) * (6000 / (6000 + fy)) * 0.75;
  const Asmax = 0.5 * pBal * b * d;

  res.status(200).json({
    d,
    As,
    Asmin,
    Asmax,
    pBal,
  });
});

module.exports = router;
