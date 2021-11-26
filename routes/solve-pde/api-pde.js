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
 *      description: Use to solve Partial Differential Equations (PDE).
 *      responses:
 *        200:
 *          description: A successful response
 *
 *
 */
router.post("/heat-equation", async (req, res) => {
  const heatEquationURL = `https://${projectLocation}-${projectId}.cloudfunctions.net/heat_equation`;

  axios({
    url: heatEquationURL,
    method: "POST",
    data: {},
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
 * @swagger
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
    message: "Trapezoidal rule integration results.",
  });
});

/**
 * @swagger
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
    message: "Trapezoidal rule integration results.",
  });
});

module.exports = router;
