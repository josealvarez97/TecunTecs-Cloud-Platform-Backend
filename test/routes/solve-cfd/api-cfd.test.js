const app = require("../../../app");
const chai = require("chai");
const chaiHttp = require("chai-http");
// Assertion style
chai.should();
chai.use(chaiHttp);

const request = require("supertest");

describe("TEST api-cfd", () => {
  /**
   * Test trapezoidal function
   */
  describe(`POST cavity-flow-2d`, () => {
    it("Should return status 200", (done) => {
      const body = {
        f: "lambda t: 3*(t**2)*exp(t**3)",
        a: 0,
        b: 1,
        n: 4,
        nt: 10,
      };

      chai
        .request(app)
        .post("/solve-cfd/cavity-flow-2d")
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
