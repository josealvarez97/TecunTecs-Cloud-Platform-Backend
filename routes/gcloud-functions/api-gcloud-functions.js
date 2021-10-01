// References:
// https://googleapis.dev/nodejs/nodejs-functions/latest/index.html

// https://googleapis.dev/nodejs/nodejs-functions/latest/v1.CloudFunctionsServiceClient.html

// Imports the Google Cloud client library
const secrets = require("../../secrets.json");
const {
  CloudFunctionsServiceClient,
  protos,
} = require("@google-cloud/functions");
const { v4: uuidv4 } = require("uuid");

const projectId = secrets.GCLOUD_PROJECT_ID;
const projectLocation = secrets.GCLOUD_PROJECT_LOCATION;

// Creates a client
const client = new CloudFunctionsServiceClient();

async function listFunctions() {
  const [functions] = await client.listFunctions({
    parent: `projects/${projectId}/locations/-`,
  });

  console.info(functions);
}

// https://googleapis.dev/nodejs/nodejs-functions/latest/v1.CloudFunctionsServiceClient.html#callFunction
/** To be used for testing purposes as very limited traffic is allowed. Use normal triggers in real life. */
async function callFunction() {
  const request = {
    name: `projects/${projectId}/locations/${projectLocation}/functions/trapezoidal`,
    data: JSON.stringify({
      f: "lambda t: 3*(t**2)*exp(t**3)",
      a: 0,
      b: 1,
      n: 4,
    }),
  };
  const [response] = await client.callFunction(request);

  console.info(response);
}

// To be used for testing purposes as very limited traffic is allowed.
async function cloudFunctionPath() {
  const path = client.cloudFunctionPath(
    projectId,
    secrets.GCLOUD_PROJECT_LOCATION
  );

  console.info(path);
}

// https://googleapis.dev/nodejs/nodejs-functions/latest/v1.CloudFunctionsServiceClient.html#createFunction
// https://stackoverflow.com/questions/60609309/create-a-google-function-from-a-google-cloud-function
// https://cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/create
// https://stackoverflow.com/questions/47376380/create-google-cloud-function-using-api-in-python
async function createFunction() {
  //https://github.com/googleapis/nodejs-functions/blob/ce4b6225cfd0c4919e4de4f19454a0e164376fa4/test/gapic_cloud_functions_service_v1.ts#L1037
  const myFunction = new protos.google.cloud.functions.v1.CloudFunction();
  myFunction.name = `projects/${projectId}/locations/${projectLocation}/functions/myfunction4`;
  myFunction.description = "";
  //   myFunction.status = "ACTIVE";
  myFunction.entryPoint = "cloud_function";
  myFunction.runtime = "python37";
  //   myFunction.availableMemoryMb = 256;
  /**VFQMItN6PbBsqi4qBhV0CuSYmEB2DTBr3iDhk1Uz secret
   *
   *      GOOG1E4I7RY72WV5CKWCAIIUBJCZ26ZXRF2MVBGES2EEEUATI3M4RWML7BECQ access key
   */
  //   myFunction.serviceAccountEmail =
  //     "tecuntecs-cloud-platform@appspot.gserviceaccount.com";
  //   myFunction.versionId = uuidv4();
  //   myFunction.labels = { "deployment-tool": "cli-gcloud" };
  //   myFunction.environmentVariables = {};
  //   myFunction.network = "";
  //   myFunction.maxInstances = 0;
  //   myFunction.vpcConnector = "";
  //   myFunction.vpcConnectorEgressSettings =
  //     "VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED";
  //   myFunction.ingressSettings = "ALLOW_ALL";
  // Very practical...
  // 9ae1e42e-d36f-4fc4-973b-aec801eb5728
  //   myFunction.buildId = uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'  ;
  //   console.log(myFunction.buildId);
  myFunction.sourceCode = "sourceArchiveUrl";
  // This worked but I believe that I could have added AppEngine's the service account in permissions of the bucket.
  myFunction.sourceArchiveUrl = "gs://cloud-functions-inhouse/test/main.zip";
  //   myFunction.sourceUploadUrl =
  //     "https://storage.cloud.google.com/cloud-functions-inhouse/test/main.zip";
  //   myFunction.trigger = "httpsTrigger";
  //   httpsTrigger = {
  //     url:
  //       "https://us-central1-tecuntecs-cloud-platform.cloudfunctions.net/myfunction",
  //     securityLevel: "SECURE_OPTIONAL",
  //   };
  myFunction.httpsTrigger = {};

  //myFunction.sourceRepository //this might be very useful...
  // There are many properties I can set such as entry point

  const request = new protos.google.cloud.functions.v1.CreateFunctionRequest();

  request.location = `projects/${projectId}/locations/${projectLocation}`;
  request.function = myFunction;
  console.log(request);

  //github.com/googleapis/gax-nodejs/blob/main/client-libraries.md#long-running-operations
  const [operation] = await client.createFunction(request);
  //**The promise which resolves to an array. The first element of the array is an object representing a long running operation. Its promise() method returns a promise you can await for. Please see the documentation for more details and examples.*/
  const [response] = await operation.promise();

  console.info(response);
}

(async () => {
  await listFunctions();
  await callFunction();
  await cloudFunctionPath();
  await createFunction();
})();
