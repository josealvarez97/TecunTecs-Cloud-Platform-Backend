const express = require("express");
const router = express.Router();
const axios = require("axios");
// Secrets
const secrets = require("../../secrets.json");
const projectId = secrets.GCLOUD_PROJECT_ID;
const projectLocation = secrets.GCLOUD_PROJECT_LOCATION;

const fs = require("fs");
const fsPromises = require("fs").promises;

const { uploadFile } = require("../../util/util-cloud-storage.js");
const { extractZipFile } = require("../../util/util-zip.js");
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

      const fileBaseName = "cavity_flow";
      // Upload zip to cloud storage
      const zipFileName = `${fileBaseName}.zip`;
      let zipFilePath;
      if (fs.existsSync("./tmp_test"))
        zipFilePath = "./tmp_test/" + zipFileName;
      else zipFilePath = "/tmp/" + zipFileName;

      await fsPromises.writeFile(zipFilePath, Buffer.from(response.data));
      const metadata = await uploadFile(
        zipFilePath,
        "zip/" + zipFileName
      ).catch(console.error);
      const publicZippedFileUrl = `https://storage.googleapis.com/${metadata["bucket"]}/${metadata["name"]}`;
      console.log("Metadata after upload", publicZippedFileUrl);

      // Unzip files and upload them all to cloud storage...
      // https://github.com/cthackers/adm-zip
      let extractedFilesPath;
      if (fs.existsSync("./tmp_test/"))
        extractedFilesPath = "./tmp_test/" + fileBaseName;
      else extractedFilesPath = "/tmp/" + fileBaseName;
      await extractZipFile(zipFilePath, extractedFilesPath).catch(
        console.error
      );

      // https://medium.com/stackfame/get-list-of-all-files-in-a-directory-in-node-js-befd31677ec5
      fs.readdir(extractedFilesPath, function (err, files) {
        // handling error
        if (err) {
          return console.log("Unable to scan directory: " + err);
        }

        // listing all files using forEach
        files.forEach(async function (file) {
          console.log("Upload file", file);
          const filepath = extractedFilesPath + "/" + file;
          console.log(filepath);
          const uploadResult = await uploadFile(
            filepath,
            "zip/" + file,
            false
          ).catch((err) => {
            console.log(err);
            throw err;
          });
          console.log(uploadResult);
        });
      });

      console.log("Uploaded CFD simulation result files to cloud storage.");

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
