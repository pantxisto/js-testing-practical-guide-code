import { it, expect, describe } from "vitest";
import { validateNumber, validateStringNotEmpty } from "./validation";

describe("validateStringNotEmpty()", () => {
  it("should throw an error if empty string is provided", () => {
    const input = "     ";
    const resultFn = () => {
      validateStringNotEmpty(input);
    };
    expect(resultFn).toThrow(/Invalid input - must not be empty./);
  });

  it("should not throw an error if non-empty string is provided", () => {
    const input = "   sdf   ";
    const resultFn = () => {
      validateStringNotEmpty(input);
    };
    expect(resultFn).not.toThrow();
  });
});

describe("validateNumber()", () => {
  it("should throw an error if not a number is provided", () => {
    const input = "423";

    const resultFn = () => {
      validateNumber(input);
    };

    expect(resultFn).toThrow(/Invalid number input./);
  });

  it("should not throw an error if a number is provided", () => {
    const input = 423;

    const resultFn = () => {
      validateNumber(input);
    };

    expect(resultFn).not.toThrow();
  });
});
