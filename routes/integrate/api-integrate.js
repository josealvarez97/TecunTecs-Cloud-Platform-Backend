// Libraries
const express = require("express");
const router = express.Router();
const axios = require("axios");
// Secrets
const secrets = require("../../secrets.json");
const projectId = secrets.GCLOUD_PROJECT_ID;
const projectLocation = secrets.GCLOUD_PROJECT_LOCATION;

// Routes

// https://swagger.io/docs/specification/2-0/describing-request-body/
// https://stackoverflow.com/questions/39924144/how-to-format-swagger-2-0-text-descriptions

/**
 * @swagger
 * /integrate:
 *    post:
 *      description: Integrates single variable function. The value of `f` (string) follows the syntax of a Python lambda function. Specifying the `method` parameter is optional.
 *      tags:
 *      - Dynamical systems
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
 *            - f
 *            - a
 *            - b
 *            - n
 *          properties:
 *            f:
 *              type: string
 *              example: "lambda t: 3*(t**2)*exp(t**3)"
 *            a:
 *              type: number
 *              example: 0
 *            b:
 *              type: number
 *              example: 1
 *            n:
 *              type: number
 *              example: 4
 *            method:
 *              type: string
 *              example: "trapezoidal"
 *      responses:
 *        200:
 *          description: A successful response
 *
 *
 */
router.post("/", (req, res) => {
  const { f, a, b, n, method } = req.body;

  const available_methods = ["trapezoidal", "midpoint"];

  if (available_methods.includes(method) == false)
    return res
      .status(400)
      .send(
        `Bad request (400). Invalid method name (${method}). \nSupported methods are ${available_methods}.`
      );

  // https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/
  axios
    .post(
      `https://${projectLocation}-${projectId}.cloudfunctions.net/${method}`,
      {
        f,
        a,
        b,
        n,
      }
    )
    .then(
      (response) => {
        console.log(response);

        res.status(200).json({
          description: `Integration results (${method} rule).`,
          result: response.data.result,
        });
      },
      (error) => {
        console.log(error);
      }
    );
});

module.exports = router;
