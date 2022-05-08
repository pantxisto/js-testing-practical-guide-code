import { it, expect, describe } from "vitest";
import { validateNotEmpty } from "./validation";

it("should throw an erro if a non empty string is provided and only consists of  blanks", () => {
  const testInput = "";

  const validationFn = () => {
    validateNotEmpty(testInput);
  };

  expect(validationFn).toThrow();
});

it("should throw and error if ", () => {
  const testInput = "  ";

  const validationFn = () => {
    validateNotEmpty(testInput);
  };

  expect(validationFn).toThrow();
});

it("should throw an error with the provided error message", () => {
  const testInput = "";
  const testErrorMessage = "Test";

  const validationFn = () => {
    validateNotEmpty(testInput, testErrorMessage);
  };

  expect(validationFn).toThrow(testErrorMessage);
});
