const cloudStorageUtil = require("./util-cloud-storage.js");
const zipUtil = require("./util-zip.js");

const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

let TEMP;
if (fs.existsSync("./tmp_test/")) TEMP = "./tmp_test/";
else TEMP = "/tmp/";

async function postprocessResultsZipfile(
  resultsFileBasename,
  resultsArraybuffer,
  fileNamesList
) {
  const data = {
    resultsZip: "",
  };
  const zipFileName = `${resultsFileBasename}.zip`;
  const zipFilePath = TEMP + zipFileName;

  // await zipUtil.arraybufferToZip(resultsArraybuffer, zipFilePath);
  await fsPromises.writeFile(zipFilePath, Buffer.from(resultsArraybuffer));

  const metadata = await cloudStorageUtil
    .uploadFile(zipFilePath, "zip/" + zipFileName)
    .catch(console.error);

  const publicZippedFileUrl = `https://storage.googleapis.com/${metadata["bucket"]}/${metadata["name"]}`;
  console.log("Metadata after zip upload", publicZippedFileUrl);
  data.resultsZip = publicZippedFileUrl;

  // Unzip files and upload them all to cloud storage bucket
  const extractedFilesPath = TEMP + resultsFileBasename;
  // shouldn't be async // SHOULDN'T EXTRACT .zip files inside of zip...
  await zipUtil
    .extractZipFile(zipFilePath, extractedFilesPath)
    .catch(console.error);
  const files = fs.readdirSync(extractedFilesPath);
  console.log("files read sync", files);
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    console.log("Upload file", file);
    const filepath = extractedFilesPath + "/" + file;
    console.log(filepath);
    const uploadResult = await cloudStorageUtil
      .uploadFile(filepath, "zip/" + file, false)
      .catch((err) => {
        console.log(err);
        throw err;
      });
    const metadataUrl = `https://storage.googleapis.com/${uploadResult["bucket"]}/${uploadResult["name"]}`;
    console.log("Upload result", metadataUrl);
    console.log("ext", path.extname(file));
    console.log("basename", path.basename(file));
    // This probably should be on top of everything in this scope
    if (fileNamesList.includes(path.basename(file)))
      data[path.basename(file)] = metadataUrl;
  }

  // not here
  //   console.log(`Uploaded ${resultsFileBasename}` simulation result files to cloud storage);
  //   res.status(200).json(data);
  return data;
}

module.exports = {
  postprocessResultsZipfile,
};
