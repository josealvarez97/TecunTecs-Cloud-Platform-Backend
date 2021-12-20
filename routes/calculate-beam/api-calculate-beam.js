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
 *      - "Civil Engineering"
 *      description: "Calculates the steel area of a beam section."
 *      responses:
 *          200:
 *              description: A successfl response
 *      consumes:
 *      - "application/json"
 *      parameters:
 *      - in: body
 *        name: body
 *        description: The body object in JSON format.
 *        required: true
 *        schema:
 *          type: object
 *          required:
 *            - fc
 *            - fy
 *            - b
 *            - h
 *            - c
 *            - M
 *          properties:
 *            fc:
 *              type: number
 *              example: 210
 *              description: Concrete strength (concrete 3000 = 210, 4000 = 280).
 *            fy:
 *              type: number
 *              example: 2810
 *              description: Steel strength (degree 40 = 2810, degree 60 = 4200).
 *            b:
 *              type: number
 *              example: 9
 *              description: Beam or slab width.
 *            h:
 *              type: number
 *              example: 30
 *              description: Beam height.
 *            c:
 *              type: number
 *              example: 2.5
 *              description: Beam cover.
 *            M:
 *              type: number
 *              example: 905
 *              description: Bending moment.
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
