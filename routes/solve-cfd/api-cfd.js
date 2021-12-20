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
const {
  postprocessResultsZipfile,
} = require("../../util/util-post-process.js");

let TEMP;
if (fs.existsSync("./tmp_test/")) TEMP = "./tmp_test/";
else TEMP = "/tmp/";

// Routes

/**
 * @swagger
 * /solve-cfd/cavity-flow-2d:
 *    post:
 *      tags:
 *      - Dynamical systems
 *      description: Simulates 2D lid-driven cavity flow problem.
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
 *            - density
 *            - viscosity
 *            - u_top
 *            - nt
 *          properties:
 *            density:
 *              type: number
 *              example: 1
 *              description: Value of density.
 *            viscosity:
 *              type: number
 *              example: 0.1
 *              description: Value of kinetic viscosity.
 *            u_top:
 *              type: number
 *              example: 8
 *              description: Velocity of the lid boundary.
 *            nt:
 *              type: number
 *              example: 100
 *              description: Number of steps.
 *
 *
 */
router.post("/cavity-flow-2d", async (req, res) => {
  const cavityFlow2dURL = `https://${projectLocation}-${projectId}.cloudfunctions.net/cavity_flow`;
  console.log("cavityFlow2dURL", cavityFlow2dURL);

  axios({
    url: cavityFlow2dURL,
    method: "POST",
    data: req.body,
    // https://stackoverflow.com/questions/59858827/convert-zip-file-stream-into-a-file-on-disk
    // https://us-central1-tecuntecs-cloud-platform.cloudfunctions.net/cavity_flow
    responseType: "arraybuffer",
  }).then(
    async (response) => {
      const data = await postprocessResultsZipfile(
        "cavity_flow",
        response.data,
        ["Result.zip", "cavity_flow.png", "FluidFlowAnimation.mp4"]
      ).catch(console.error);
      console.log("Uploaded bpCausal simulation result files to cloud storage");
      res.status(200).json(data);
    },
    (error) => {
      console.log(error);
      res.status(500);
    }
  );
});

module.exports = router;

// async (response) => {
//   const data = {
//     resultsZip: "",
//     resultsPng: "",
//   };

//   console.log("response.data");
//   // console.log(response.data);

//   const fileBaseName = "cavity_flow";
//   // Upload zip to cloud storage
//   const zipFileName = `${fileBaseName}.zip`;
//   const zipFilePath = TEMP + zipFileName;

//   await fsPromises.writeFile(zipFilePath, Buffer.from(response.data));
//   const metadata = await uploadFile(
//     zipFilePath,
//     "zip/" + zipFileName
//   ).catch(console.error);
//   const publicZippedFileUrl = `https://storage.googleapis.com/${metadata["bucket"]}/${metadata["name"]}`;
//   console.log("Metadata after upload", publicZippedFileUrl);
//   data.resultsZip = publicZippedFileUrl;

//   // Unzip files and upload them all to cloud storage...
//   // https://github.com/cthackers/adm-zip
//   const extractedFilesPath = TEMP + fileBaseName;
//   await extractZipFile(zipFilePath, extractedFilesPath).catch(
//     console.error
//   );

//   // https://medium.com/stackfame/get-list-of-all-files-in-a-directory-in-node-js-befd31677ec5
//   const files = fs.readdirSync(extractedFilesPath);
//   console.log("files read sync", files);
//   // https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop
//   for (let i = 0; i < files.length; i++) {
//     const file = files[i];
//     console.log("Upload file", file);
//     const filepath = extractedFilesPath + "/" + file;
//     console.log(filepath);
//     const uploadResult = await uploadFile(
//       filepath,
//       "zip/" + file,
//       false
//     ).catch((err) => {
//       console.log(err);
//       throw err;
//     });
//     const metadataUrl = `https://storage.googleapis.com/${uploadResult["bucket"]}/${uploadResult["name"]}`;
//     console.log("Upload result", metadataUrl);
//     console.log("ext", path.extname(file));
//     if (path.extname(file) == ".png") data.resultsPng = metadataUrl;
//   }

//   console.log("Uploaded CFD simulation result files to cloud storage.");

//   res.status(200).json(data);
// },
// (error) => {
//   console.log(error);
// }
