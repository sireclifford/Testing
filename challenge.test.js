const { stringLength, validateString, reverseString, Calculator, capitalizeFirst } = require("./challenge");

describe("Tasks 1 & 2 ", function () {
  test("stringLength should return the length of a string", () => {
    expect(stringLength("hello")).toBe(5);
  });

  test("error: string length less than 1", () => {
    expect(validateString("")).toBeUndefined();
  });

  test("error: string length greater than 10", () => {
    expect(validateString("hello world")).toBeUndefined();
  });

  test("reverseString should return the reverse of a string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  test("error: reverseString should return the reverse of a string", () => {
    expect(reverseString("")).toBeUndefined();
  });
});

describe("Add", function () {
  test("add should return the sum of two numbers", () => {
    const calc = new Calculator();
    expect(calc.add(1, 2)).toBe(3);
  });

  test("error: add should return the sum of two numbers", () => {
    const calc = new Calculator();
    expect(calc.add(1, "")).toBeUndefined();
  });

  test("error: add should return the sum of two numbers", () => {
    const calc = new Calculator();
    expect(calc.add("", 2)).toBeUndefined();
  });
});

describe("Subtract", function () {
  test("subtract should return the difference of two numbers", () => {
    const calc = new Calculator();
    expect(calc.subtract(3, 2)).toBe(1);
  });

  test("error: subtract should return the difference of two numbers", () => {
    const calc = new Calculator();
    expect(calc.subtract(1, "")).toBeUndefined();
  });

  test("error: subtract should return the difference of two numbers", () => {
    const calc = new Calculator();
    expect(calc.subtract("", 2)).toBeUndefined();
  });
});

describe("Multiply", function () {
  test("multiply should return the product of two numbers", () => {
    const calc = new Calculator();
    expect(calc.multiply(3, 2)).toBe(6);
  });

  test("error: multiply should return the product of two numbers", () => {
    const calc = new Calculator();
    expect(calc.multiply(1, "")).toBeUndefined();
  });

  test("error: multiply should return the product of two numbers", () => {
    const calc = new Calculator();
    expect(calc.multiply("", 2)).toBeUndefined();
  });
});

describe("Divide", function () {
  test("divide should return the quotient of two numbers", () => {
    const calc = new Calculator();
    expect(calc.divide(6, 2)).toBe(3);
  });

  test("error: divide should return the quotient of two numbers", () => {
    const calc = new Calculator();
    expect(calc.divide(1, "")).toBeUndefined();
  });

  test("error: divide should return the quotient of two numbers", () => {
    const calc = new Calculator();
    expect(calc.divide("", 2)).toBeUndefined();
  });
});

describe("Capitalize First", function () {
  test("capitalizeFirst should return the first letter of a string in uppercase", () => {
    expect(capitalizeFirst("hello")).toBe("Hello");
  });

  test("error: capitalizeFirst should return the first letter of a string in uppercase", () => {
    expect(capitalizeFirst("")).toBeUndefined();
  }, "error: capitalizeFirst should return the first letter of a string in uppercase");
});
