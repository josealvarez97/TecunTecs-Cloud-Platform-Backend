// Libraries

const express = require("express");
const router = express.Router();
const axios = require("axios");
// Secrets
const secrets = require("../../secrets.json");
const projectId = secrets.GCLOUD_PROJECT_ID;
const projectLocation = secrets.GCLOUD_PROJECT_LOCATION;

// Routes

/**
 * @swagger
 * /optimize-qio/number-partition:
 *    post:
 *      tags:
 *      - "Stretch Goal: Quantum-inspired Optimization"
 *      description: "Use to solve the Number Partitioning Problem (NPP) in QUBO format. QUBO stands for _Quadratic Unconstrained Binary Optimization_.
 *          The QUBO format is one of the main input formats of [quantum-inspired optimization](https://youtu.be/hGLSZK6eoQs).
 *
 *
 *          [Alidaee et al. (2005)](https://www.hindawi.com/journals/ads/2005/317849/) recast the problem as a QUBO problem.
 *          Their approach accommodates both the two-subset partition case as well as the more general case of multiple subsets.
 *
 *
 *          **Capstone-related note**: One stretch goal of the current implementation is to extend it to solve NPPs that consider more than 2 partitions."
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
 *              - partition_weights
 *          properties:
 *              partition_weights:
 *                  type: array
 *                  example: [1, 5, 9, 21, 35, 5, 3, 5, 10, 11]
 *      responses:
 *        200:
 *          description: A successful response
 *
 *
 */
router.post("/number-partition", (req, res) => {
  const { partition_weights } = req.body;
  axios
    .post(
      `https://${projectLocation}-${projectId}.cloudfunctions.net/number_partition`,
      {
        partition_weights,
      }
    )
    .then(
      (response) => {
        // console.log(response);

        const partitionConfig = response.data.result.configuration;
        const A = [];
        const B = [];

        //es7
        Object.keys(partitionConfig).forEach((key) => {
          const weight = partition_weights[key];

          console.log(key, partitionConfig[key], partition_weights[key]); // key , value

          if (partitionConfig[key] < 0) A.push(weight);
          else B.push(weight);
        });

        res.status(200).json({
          description: `Partition results (quantum-inspired optimization)).`,
          //   result: response.data.result.configuration,
          result: [A, B],
        });
      },
      (error) => {
        console.log(error);
      }
    );
});

module.exports = router;
