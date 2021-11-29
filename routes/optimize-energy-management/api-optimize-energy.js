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
 * /optimize-energy-management/static-network:
 *  post:
 *      tags:
 *      - "Energy Management"
 *      responses:
 *          200:
 *              description: A successfl response
 */
router.post("/static-network", (req, res) => {
  console.log(req.body);
  axios
    .post(
      `https://${projectLocation}-${projectId}.cloudfunctions.net/static_energy_network`,
      req.body
    )
    .then(
      (response) => {
        console.log(response.data);
        res.status(200).json(response.data);
      },
      (error) => {
        console.log(error);
        res.status(400).json({ error });
      }
    );
});

module.exports = router;
