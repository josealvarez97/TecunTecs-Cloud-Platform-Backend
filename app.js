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
      description: "TecunTecs Cloud Platform API Information",
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
    "./routes/optimize-qio/*.js",
  ],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use(express.urlencoded({ extended: false })); // {limit: '50mb', extended: true}
app.use(express.json({ limit: "100mb", extended: true })); // use json content type...

// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));
app.use("/archive/", express.static("archive"));

app.use("/api-docs/", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
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

// Start the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log("Press Ctrl+C to quit.");
});
// [END gae_node_request_example]

module.exports = app;
