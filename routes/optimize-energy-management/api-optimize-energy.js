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
 *      - "Mathematical Optimization"
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
 *            - loads
 *            - generators
 *            - lines
 *            - nets
 *          properties:
 *            loads:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  name:
 *                    type: string
 *                  power:
 *                    type: number
 *              example:
 *                - name: "load1"
 *                  power: 50
 *                - name: "load2"
 *                  power: 100
 *            generators:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  name:
 *                    type: string
 *                  power_max:
 *                    type: number
 *                  alpha:
 *                    type: number
 *                  beta:
 *                    type: number
 *              example:
 *                - name: "gen1"
 *                  power_max: 1000
 *                  alpha: 0.02
 *                  beta: 30
 *                - name: "gen2"
 *                  power_max: 100
 *                  alpha: 0.2
 *                  beta: 0
 *            lines:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  name:
 *                    type: string
 *                  power_max:
 *                    type: number
 *              example:
 *                - name: "line1"
 *                  power_max: 50
 *                - name: "line2"
 *                  power_max: 10
 *                - name: "line3"
 *                  power_max: 50
 *            nets:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  name:
 *                    type: string
 *                  terminals:
 *                    type: array
 *                    items:
 *                      type: object
 *                      properties:
 *                        device:
 *                          type: string
 *                        terminal:
 *                          type: number
 *              example:
 *              - name: "net1"
 *                terminals:
 *                  - device: "load1"
 *                    terminal: 0
 *                  - device: "gen1"
 *                    terminal: 0
 *                  - device: "line1"
 *                    terminal: 0
 *                  - device: "line2"
 *                    terminal: 0
 *              - name: "net2"
 *                terminals:
 *                  - device: "load2"
 *                    terminal: 0
 *                  - device: "line1"
 *                    terminal: 1
 *                  - device: "line3"
 *                    terminal: 0
 *              - name: "net3"
 *                terminals:
 *                  - device: "gen2"
 *                    terminal: 0
 *                  - device: "line2"
 *                    terminal: 1
 *                  - device: "line3"
 *                    terminal: 1
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
