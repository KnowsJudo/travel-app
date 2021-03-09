import "regenerator-runtime/runtime";

const request = require("supertest");
const app = require("../src/server/index");

describe("server endpoints", () => {
  it("should return the weather data", async () => {
    const res = await request(app).post("/get-weather").send({
      days: 2,
      lat: 36.17,
      long: -115.14,
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("city_name", "Las Vegas");
  });
});
