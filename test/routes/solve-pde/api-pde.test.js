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
      const body = {
        heat_x_0: 0,
        heat_x_max: 0,
        f_0: "lambda x: sin(pi*x/1)",
        alpha: 0.1,
        Nx: 20,
        x_max: 1,
        Mt: 20,
        t_max: 1,
      };

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
