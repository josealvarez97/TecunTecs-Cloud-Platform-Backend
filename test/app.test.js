const secrets = require("../secrets.json");
const app = require("../app");
const chai = require("chai");
const chaiHttp = require("chai-http");

// Assertion style
chai.should();
chai.use(chaiHttp);

const request = require("supertest");

describe("gae_node_request_example", () => {
  describe("GET /", () => {
    it("should get 200", (done) => {
      request(app).get("/").expect(200, done);
    });

    it("should get Hello World", (done) => {
      request(app).get("/").expect("Hello world Capstone API!", done);
    });
  });
});

describe("TEST Google Cloud Functions", () => {
  /**
   * Test trapezoidal function
   */
  describe(`POST https://${secrets.GCLOUD_PROJECT_LOCATION}-${secrets.GCLOUD_PROJECT_ID}.cloudfunctions.net/trapezoidal`, () => {
    it("Should return the result of the numerical method (trapezoidal rule)", (done) => {
      const body = {
        f: "lambda t: 3*(t**2)*exp(t**3)",
        a: 0,
        b: 1,
        n: 4,
      };

      chai
        .request(
          `https://${secrets.GCLOUD_PROJECT_LOCATION}-${secrets.GCLOUD_PROJECT_ID}.cloudfunctions.net/`
        )
        .post("/trapezoidal")
        .send(body)
        .end((err, response) => {
          response.should.have.status(200);
          // console.log(response);
          response.should.property("text").eq("1.9227167504675762");
          done();
        });
    });
  });
});
