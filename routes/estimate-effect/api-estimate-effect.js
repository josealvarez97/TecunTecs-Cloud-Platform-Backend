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

router.post("/bpCausal", async (req, res) => {
  const bpCausalURL = secrets.BP_CAUSAL_URL;
  console.log("bpCausalURL", bpCausalURL);

  axios({
    url: bpCausalURL,
    method: "POST",
    data: req.body,
    responseType: "arraybuffer",
  }).then(
    async (response) => {
      const data = await postprocessResultsZipfile("bpCausal", response.data, [
        "sout1",
      ]).catch(console.error);
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
