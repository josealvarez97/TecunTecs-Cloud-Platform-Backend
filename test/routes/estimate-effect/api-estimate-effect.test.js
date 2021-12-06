const app = require("../../../app");
const chai = require("chai");
const chaiHttp = require("chai-http");
// Assertion style
chai.should();
chai.use(chaiHttp);

describe("TEST api-estimate-effect", () => {
  /**
   * Test trapezoidal function
   */
  describe(`POST bpCausal`, () => {
    it("Should return status 200", (done) => {
      const body = {
        index: ["id", "time"],
        Yname: "Y",
        Dname: "D",
        Xname: ["X1", "X2", "X3", "X4", "X5", "X6", "X7", "X8", "X9"],
        Zname: ["X1", "X2", "X3", "X4", "X5", "X6", "X7", "X8", "X9"],
        Aname: ["X1", "X2", "X3", "X4", "X5", "X6", "X7", "X8", "X9"],
        re: "both",
        ar1: true,
        r: 10,
        niter: 150,
        burn: 50,
        xlasso: 1,
        zlasso: 1,
        alasso: 1,
        flasso: 1,
        a1: 0.001,
        a2: 0.001,
        b1: 0.001,
        b2: 0.001,
        c1: 0.001,
        c2: 0.001,
        p1: 0.001,
        p2: 0.001,
      };

      chai
        .request(app)
        .post("/estimate-effect/bpCausal")
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
