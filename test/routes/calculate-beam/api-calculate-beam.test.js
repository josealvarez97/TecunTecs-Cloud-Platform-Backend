const app = require("../../../app");
const chai = require("chai");
const chaiHttp = require("chai-http");
// Assertion style
chai.should();
chai.use(chaiHttp);

describe("TEST api-calculate-beam", () => {
  /**
   * Test beam function
   */
  describe(`POST steel-area`, () => {
    it("Should return status 200", (done) => {
      //   const body = { fc: 210, fy: 2810, b: 9, h: 30, c: 2.5, M: 905 };
      const body = {
        fc: "210",
        fy: "2810",
        b: "9",
        h: "30",
        c: "2.5",
        M: "905",
      };

      console.log(body);
      chai
        .request(app)
        .post("/calculate-beam/steel-area")
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
