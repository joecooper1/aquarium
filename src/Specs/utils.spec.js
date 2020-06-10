const chai = require("chai");
// chai.use(require("chai-sorted"));
const { expect } = chai;

const getRandomNum = require("../utils/getRandomNum.js");

describe("utils", () => {
  it("getRandomNum returns a random positive or negative number within a range", () => {
    expect(getRandomNum(5) < 5).toBe(true);
    expect(getRandomNum(5) > -5).toBe(true);
  });
});
