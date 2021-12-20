// Copyright 2017 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

"use strict";

// [START gae_node_request_example]
const express = require("express");
const app = express();
// https://www.stackhawk.com/blog/react-cors-guide-what-it-is-and-how-to-enable-it/
const cors = require("cors");
app.use(cors()); // https://expressjs.com/en/resources/middleware/cors.html

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const PORT = process.env.PORT || 8080;

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "TecunTecs API",
      description:
        "Welcome to the TecunTecs Cloud Platform API Information! \n\nBelow you will be able to see the details of every API route, and even try them out. Every route has example values for the JSON Body object (click on 'model' to reveal the description of every parameter inside the body object).",
      contact: {
        name: "Jose Alvarez",
      },
      servers: ["https://localhost:" + process.env.PORT],
    },
  },
  apis: [
    "app.js",
    "./routes/integrate/*.js",
    "./routes/solve-ode/*.js",
    "./routes/solve-pde/*.js",
    "./routes/solve-cfd/*.js",
    "./routes/optimize-lp/*.js",
    "./routes/optimize-energy-management/*.js",
    "./routes/optimize-qio/*.js",
    "./routes/calculate-beam/*.js",
    "./routes/estimate-effect/*.js",
  ],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
const swaggerSpec2 = swaggerJsDoc({
  swaggerDefinition: {
    info: {
      title: "TecunTecs API (Industry)",

      description:
        "Welcome to the TecunTecs Cloud Platform API Information (for Industry)",
      contact: {
        name: "Jose Alvarez",
      },
      servers: ["https://localhost:" + process.env.PORT],
    },
  },
  apis: ["./routes/calculate-beam/*.js"],
});

app.use(express.urlencoded({ extended: false })); // {limit: '50mb', extended: true}
app.use(express.json({ limit: "100mb", extended: true })); // use json content type...

// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));
app.use("/archive/", express.static("archive"));

// https://github.com/Surnet/swagger-jsdoc/blob/v7/examples/app/app.js
// https://github.com/Surnet/swagger-jsdoc/blob/db6e0e8693c126e865bae3d6049a59dbd5977639/examples/app/app.js#L54
// https://www.npmjs.com/package/swagger-ui-express
app.get("/api-docs/swagger.json", (req, res) => res.json(swaggerDocs)); //https://openbase.com/js/swagger-ui-express

// https://github.com/swagger-api/swagger-ui/issues/4631#issuecomment-396429901
var options = {
  // https://www.npmjs.com/package/swagger-ui-express
  swaggerOptions: {
    url: "/api-docs/swagger.json",
    // validatorUrl: null,
  },
};
app.use(
  "/api-docs",
  swaggerUi.serveFiles(null, options),
  swaggerUi.setup(null, options)
);

app.use(
  "/api-docs-industry/",
  swaggerUi.serveFiles(swaggerSpec2),
  swaggerUi.setup(swaggerSpec2)
);

app.get("/test", (req, res) => {
  res.status(200).send("Hello world Capstone API!").end();
});

// Overriden anyways by "app.use(express.static("public"));"
app.get("/", (req, res) => {
  // res.status(200).send("Hello world Capstone API!").end();
  res.redirect("/api-docs");
});

app.use(
  "/number-partition/",
  require("./routes/number-partition/api-number-partition.js")
);

app.use("/integrate/", require("./routes/integrate/api-integrate.js"));

app.use("/optimize-qio/", require("./routes/optimize-qio/api-optimize-qio.js"));

app.use("/solve-cfd/", require("./routes/solve-cfd/api-cfd.js"));

app.use("/solve-pde/", require("./routes/solve-pde/api-pde.js"));

app.use(
  "/optimize-energy-management",
  require("./routes/optimize-energy-management/api-optimize-energy.js")
);

app.use(
  "/calculate-beam/",
  require("./routes/calculate-beam/api-calculate-beam.js")
);

app.use(
  "/estimate-effect",
  require("./routes/estimate-effect/api-estimate-effect.js")
);

// Start the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log("Press Ctrl+C to quit.");
});
// [END gae_node_request_example]

module.exports = app;
