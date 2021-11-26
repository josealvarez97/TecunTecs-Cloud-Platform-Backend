const app = require("../../../app");
const chai = require("chai");
const chaiHttp = require("chai-http");
// Assertion style
chai.should();
chai.use(chaiHttp);

const request = require("supertest");

describe("TEST api-pde", () => {
  /**
   * Test trapezoidal function
   */
  describe(`POST heat-equation`, () => {
    it("Should return status 200", (done) => {
      const body = {};

      chai
        .request(app)
        .post("/solve-pde/heat-equation")
        .send(body)
        .end((err, response) => {
          console.log(response.body);
          if (err) console.log(err);
          response.should.have.status(200);
          done();
        });
    }).timeout(40000);
  });
});
