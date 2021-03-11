import "regenerator-runtime/runtime";

const request = require("supertest");
const app = require("../src/server/index");

describe("server endpoints", () => {
  it("should return the correct data values", async () => {
    const res = await request(app).post("/get-data").send({
      days: 2,
      dest: "las vegas",
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(
      expect.objectContaining({
        forecast: expect.arrayContaining([
          expect.objectContaining({
            date: expect.any(String),
            maxTemp: expect.any(Number),
            minTemp: expect.any(Number),
            weather: expect.any(String),
          }),
        ]),
        image: expect.any(String),
      })
    );
    expect(res.body.forecast.length).toBe(2);
  });
});
