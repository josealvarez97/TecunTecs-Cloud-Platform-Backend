const { Storage } = require("@google-cloud/storage");
const secrets = require("../secrets.json");

const bucketName = secrets.GCLOUD_BUCKET_NAME;

const storage = new Storage();

async function uploadFile(filename, destinationFilename = null, gzip_ = true) {
  if (!destinationFilename) destinationFilename = filename;

  console.log("uploadFile called");
  console.log(bucketName);
  console.log("destinationFilename", destinationFilename);
  const result = await storage
    .bucket(bucketName)
    .upload(filename, {
      destination: destinationFilename,
      // gzip: gzip_,
      metadata: {
        cacheControl: "no-cache, max-age=0",
      },
    })
    // https://stackoverflow.com/questions/39442170/javascript-errors-not-showing-up-in-console
    .catch((err) => {
      console.log(err);
      throw err;
    });
  // console.log(result);
  console.log(
    `${filename} uploaded to ${bucketName} ${JSON.stringify(
      result[0]["metadata"]["bucket"]
    )}`
  );

  return result[0]["metadata"];
}

module.exports = {
  uploadFile,
};
