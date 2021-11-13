const AdmZip = require("adm-zip");
// https://github.com/cthackers/adm-zip

async function extractZipFile(zipFilePath, targetPath) {
  console.log("extractZipFile called");
  const zip = new AdmZip(zipFilePath);

  zip.extractAllTo(targetPath, true);

  console.log("Extracted zip file successfully.");
}

module.exports = {
  extractZipFile,
};
