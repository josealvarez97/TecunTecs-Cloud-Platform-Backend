const { Storage } = require("@google-cloud/storage");
const secrets = require("../secrets.json");

const bucketName = secrets.GCLOUD_BUCKET_NAME;

const storage = new Storage();

async function uploadFile(filename) {
  console.log("uploadFile called");
  console.log(bucketName);
  const result = await storage.bucket(bucketName).upload(filename, {
    destination: "zip/" + filename,
    gzip: true,
    metadata: {
      cacheControl: "no-cache, max-age=0",
    },
  });

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
