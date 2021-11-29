const app = require("../../../app");
const chai = require("chai");
const chaiHttp = require("chai-http");
// Assertion style
chai.should();
chai.use(chaiHttp);

describe("TEST api-optimize-energy", () => {
  /**
   * Test trapezoidal function
   */
  describe(`POST static-network`, () => {
    it("Should return status 200", (done) => {
      const body = {
        loads: [
          { name: "load1", power: 50 },
          { name: "load2", power: 100 },
        ],
        generators: [
          { name: "gen1", power_max: 1000, alpha: 0.02, beta: 30 },
          { name: "gen2", power_max: 100, alpha: 0.2, beta: 0 },
        ],
        lines: [
          { name: "line1", power_max: 50 },
          { name: "line2", power_max: 10 },
          { name: "line3", power_max: 50 },
        ],
        nets: [
          {
            name: "net1",
            terminals: [
              { device: "load1", terminal: 0 },
              { device: "gen1", terminal: 0 },
              { device: "line1", terminal: 0 },
              { device: "line2", terminal: 0 },
            ],
          },
          {
            name: "net2",
            terminals: [
              { device: "load2", terminal: 0 },
              { device: "line1", terminal: 1 },
              { device: "line3", terminal: 0 },
            ],
          },
          {
            name: "net3",
            terminals: [
              { device: "gen2", terminal: 0 },
              { device: "line2", terminal: 1 },
              { device: "line3", terminal: 1 },
            ],
          },
        ],
      };

      chai
        .request(app)
        .post("/optimize-energy-management/static-network")
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
