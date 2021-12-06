const AdmZip = require("adm-zip");
// https://github.com/cthackers/adm-zip

const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

// This shouldn't be async this is a mistake
async function extractZipFile(zipFilePath, targetPath) {
  console.log("extractZipFile called");
  const zip = new AdmZip(zipFilePath);

  zip.extractAllTo(targetPath, true);

  console.log("Extracted zip file successfully.");
}

// This one is okay to be async
async function arraybufferToZip(arraybuffer, zipFilePath) {
  await fsPromises.writeFile(zipFilePath, Buffer.from(arraybuffer));
}

module.exports = {
  extractZipFile,
  arraybufferToZip,
};
