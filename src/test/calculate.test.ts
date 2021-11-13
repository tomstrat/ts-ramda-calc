import * as R from "ramda";
import { calculate } from "../index";

describe("test add function", () => {
  it("add numbers correctly", () => {
    expect(calculate(R.add, 10, 15)).toBe(25);
  });
  it("adds more than 2 numbers", () => {
    expect(calculate(R.add, 5, 7, 20, 30)).toBe(62);
  });
  it("returns same number if one argument", () => {
    expect(calculate(R.add, 10)).toBe(10);
  });
});

describe("test subtract function", () => {
  it("subtract numbers correctly", () => {
    expect(calculate(R.subtract, 15, 5)).toBe(10);
  });
  it("subtracts more than 2 numbers", () => {
    expect(calculate(R.subtract, 100, 50, 25, 10)).toBe(15);
  });
  it("returns same number if one argument", () => {
    expect(calculate(R.subtract, 10)).toBe(10);
  });
  it("returns minus numbers", () => {
    expect(calculate(R.subtract, 25, 10, 50, 6)).toBe(-41);
  });
});

describe("test multiply function", () => {
  it("multiplies numbers correctly", () => {
    expect(calculate(R.multiply, 10, 15)).toBe(150);
  });
  it("multiplies more than 2 numbers", () => {
    expect(calculate(R.multiply, 5, 7, 20, 30)).toBe(21000);
  });
  it("returns same number if one argument", () => {
    expect(calculate(R.multiply, 10)).toBe(10);
  });
});

describe("test divide function", () => {
  it("divides numbers correctly", () => {
    expect(calculate(R.divide, 15, 5)).toBe(3);
  });
  it("divides more than 2 numbers", () => {
    expect(calculate(R.divide, 40, 10, 2)).toBe(2);
  });
  it("returns same number if one argument", () => {
    expect(calculate(R.divide, 10)).toBe(10);
  });
});