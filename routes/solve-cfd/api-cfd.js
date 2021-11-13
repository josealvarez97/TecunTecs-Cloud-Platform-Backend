const express = require("express");
const router = express.Router();
const axios = require("axios");
// Secrets
const secrets = require("../../secrets.json");
const projectId = secrets.GCLOUD_PROJECT_ID;
const projectLocation = secrets.GCLOUD_PROJECT_LOCATION;

const fs = require("fs");
const fsPromises = require("fs").promises;

// Routes

/**
 * @swagger
 * /solve-cfd/cavity-flow-2d:
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
router.post("/cavity-flow-2d", async (req, res) => {
  const cavityFlow2dURL = `https://${projectLocation}-${projectId}.cloudfunctions.net/cavity_flow`;
  console.log("cavityFlow2dURL", cavityFlow2dURL);
  axios({
    url: cavityFlow2dURL,
    method: "POST",
    data: { f: "", a: "", b: "", n: "" },
    // https://stackoverflow.com/questions/59858827/convert-zip-file-stream-into-a-file-on-disk
    // https://us-central1-tecuntecs-cloud-platform.cloudfunctions.net/cavity_flow
    responseType: "arraybuffer",
  }).then(
    async (response) => {
      console.log("response.data");
      // console.log(response.data);
      await fsPromises.writeFile("filename.zip", Buffer.from(response.data));

      res.status(200).json({
        description: "Successfully saved zip file in the server",
      });
    },
    (error) => {
      console.log(error);
    }
  );
});

module.exports = router;
