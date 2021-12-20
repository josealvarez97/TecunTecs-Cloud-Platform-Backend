const express = require("express");
const router = express.Router();
const axios = require("axios");
// Secrets
const secrets = require("../../secrets.json");
const projectId = secrets.GCLOUD_PROJECT_ID;
const projectLocation = secrets.GCLOUD_PROJECT_LOCATION;

const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const { uploadFile } = require("../../util/util-cloud-storage.js");
const { extractZipFile } = require("../../util/util-zip.js");

let TEMP;
if (fs.existsSync("./tmp_test/")) TEMP = "./tmp_test/";
else TEMP = "/tmp/";

// Routes

/**
 * @swagger
 * /solve-pde/heat-equation:
 *    post:
 *      tags:
 *      - Dynamical systems
 *      description: Simulates the heat equation.
 *      responses:
 *        200:
 *          description: A successful response
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
 *            - heat_x_0
 *            - heat_x_max
 *            - f_0
 *            - alpha
 *            - Nx
 *            - x_max
 *            - Mt
 *            - t_max
 *          properties:
 *            heat_x_0:
 *              type: number
 *              example: 0
 *              description: Boundary condition at x=0.
 *            heat_x_max:
 *              type: number
 *              example: 0
 *              description: Boundary condition at x=L.
 *            f_0:
 *              type: string
 *              example: "lambda x: sin(pi*x/1)"
 *              description: Initial condition at t=0.
 *            alpha:
 *              type: number
 *              example: 0.1
 *              description: The termal diffusivity.
 *            Nx:
 *              type: number
 *              example: 20
 *              description: Number of mesh points in x direction.
 *            x_max:
 *              type: number
 *              example: 1
 *              description: Maximum value of x domain.
 *            Mt:
 *              type: number
 *              example: 20
 *              description: Number of time steps.
 *            t_max:
 *              type: number
 *              example: 1
 *              description: End time.
 *
 *
 *
 *
 */
router.post("/heat-equation", async (req, res) => {
  // const { heat_x_0, a, b, n, method } = req.body;
  console.log(req.body);
  const heatEquationURL = `https://${projectLocation}-${projectId}.cloudfunctions.net/heat_equation`;

  axios({
    url: heatEquationURL,
    method: "POST",
    data: req.body,
    responseType: "arraybuffer",
  }).then(
    async (response) => {
      const data = {
        resultsZip: "",
        resultsPng: "",
      };

      const fileBaseName = "heat_equation";
      const zipFileName = `${fileBaseName}.zip`;
      const zipFilePath = TEMP + zipFileName;
      await fsPromises.writeFile(zipFilePath, Buffer.from(response.data));
      const metadata = await uploadFile(zipFilePath, "zip/" + zipFileName);
      const publicZippedFileUrl = `https://storage.googleapis.com/${metadata["bucket"]}/${metadata["name"]}`;
      data.resultsZip = publicZippedFileUrl;
      const extractedFilesPath = TEMP + fileBaseName;
      await extractZipFile(zipFilePath, extractedFilesPath);

      const files = fs.readdirSync(extractedFilesPath);

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const filepath = extractedFilesPath + "/" + file;
        const uploadResult = await uploadFile(filepath, "zip/" + file, false);
        const metadataUrl = `https://storage.googleapis.com/${uploadResult["bucket"]}/${uploadResult["name"]}`;
        if (path.extname(file) == ".png") data.resultsPng = metadataUrl;
      }

      res.status(200).json(data);
    },
    (error) => {
      console.log(error);
    }
  );
});

/**
 * //@swagger
 * /pde/laplace-equation:
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
router.post("/wave-equation", (req, res) => {
  res.status(200).json({
    message: "Not implemented.",
  });
});

/**
 * //@swagger
 * /pde/wave-equation:
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
router.post("/wave-equation", (req, res) => {
  res.status(200).json({
    message: "Not implemented.",
  });
});

module.exports = router;
