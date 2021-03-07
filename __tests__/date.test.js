import {
  calculateDateDifference,
  convertDateToBits,
  toDayName,
} from "../src/client/js/date";

const may_31_2020 = new Date("2021-05-31");
const jun_30_2020 = new Date("2021-06-30");

describe("Test that the calculateDateDifference function works correctly", () => {
  test("Check that the difference between 2021-05-31 and 2021-06-30 is 30 days", () => {
    expect(calculateDateDifference(jun_30_2020, may_31_2020)).toEqual(30);
  });

  test("Check that the difference between 2021-06-30 and 2021-06-30 is 0 days", () => {
    expect(calculateDateDifference(jun_30_2020, jun_30_2020)).toEqual(0);
  });
});

describe("Test that the convertDateToBits function works correctly", () => {
  test("Check that the date 1970-01-01 is decyphered", () => {
    expect(convertDateToBits(new Date(0))).toEqual({
      year: "1970",
      month: "01",
      date: "01",
    });
  });

  test("Check that the date 2021-06-30 is decyphered", () => {
    expect(convertDateToBits(jun_30_2020)).toEqual({
      year: "2021",
      month: "06",
      date: "30",
    });
  });

  test("Check that an invalid date is decyphered as NaN", () => {
    expect(convertDateToBits(new Date("Invalid"))).toEqual({
      year: "NaN",
      month: "NaN",
      date: "NaN",
    });
  });
});

describe("Test the toDayName function calculates the correct day", () => {
  test("Check that Day '0' is 'Sunday'", () => {
    expect(toDayName(0)).toEqual("Sunday");
  });
  test("Check that Day '3' is 'Wednesday'", () => {
    expect(toDayName(3)).toEqual("Wednesday");
  });
  test("Check that Day '7' is `undefined`", () => {
    expect(toDayName(7)).toBe(undefined);
  });
});
