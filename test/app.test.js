const app = require("../app");
const chai = require("chai");
const chaiHttp = require("chai-http");

// Assertion style
chai.should();
chai.use(chaiHttp);

const request = require("supertest");
const secrets = require("../secrets.json");
const projectId = secrets.GCLOUD_PROJECT_ID;
const projectLocation = secrets.GCLOUD_PROJECT_LOCATION;

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
  describe(`POST https://${projectLocation}-${projectId}.cloudfunctions.net/trapezoidal`, () => {
    it("Should return the hand-computed result (trapezoidal rule)", (done) => {
      const body = {
        f: "lambda t: 3*(t**2)*exp(t**3)",
        a: 0,
        b: 1,
        n: 4,
      };

      chai
        .request(`https://${projectLocation}-${projectId}.cloudfunctions.net/`)
        .post("/trapezoidal")
        .send(body)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.have.property("result");
          response.body.should.have.property("result").eq(1.9227167504675762);
          done();
        });
    });

    it("Should return the hand-computed result (trapezoidal rule)", (done) => {
      chai
        .request(`https://${projectLocation}-${projectId}.cloudfunctions.net/`)
        .post("/trapezoidal")
        .send({
          f: "lambda t: 3*(t**2)*exp(t**3)",
          a: 0,
          b: 1,
          n: 2,
        })
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.have.property("result");
          response.body.should.have.property("result").eq(2.463642041244344);
          done();
        });
    });

    it("Should solve a problem without numerical errors (trapezoidal rule)", (done) => {
      const F = (x) => {
        return 3 * x ** 2 - 4 * x;
      };
      const a = 1.2;
      const b = 4.4;
      const expected = F(b) - F(a);
      const tol = 1e-14;
      const body = {
        f: "lambda x: 6*x-4",
        a: a,
        b: b,
        n: 2,
      };
      chai
        .request(`https://${projectLocation}-${projectId}.cloudfunctions.net/`)
        .post("/trapezoidal")
        .send(body)
        .end((err, response) => {
          console.log(response.body);
          response.should.have.status(200);
          response.body.should.have.property("result");
          response.body.should.have
            .property("result")
            .to.be.approximately(expected, tol);
          done();
        });
    });
  });
});
