import { it, describe, expect } from "vitest";
import { HttpError, ValidationError } from "./errors";

describe("class HttpError", () => {
  it("should contain the provided status code, message and data", () => {
    const testStatusCode = 1;
    const testMessage = "Test";
    const testData = { key: "test" };

    const testError = new HttpError(testStatusCode, testMessage, testData);

    expect(testError.statusCode).toBe(testStatusCode);
    expect(testError.message).toBe(testMessage);
    expect(testError.data).toBe(testData);
  });

  it("should contain undefined as data if no data is provided", () => {
    const testStatusCode = 1;
    const testMessage = "Test";

    const testError = new HttpError(testStatusCode, testMessage);

    expect(testError.statusCode).toBe(testStatusCode);
    expect(testError.message).toBe(testMessage);
    expect(testError.data).not.toBeDefined();
  });
});

describe("class ValidationError", () => {
  it("should contain the provided message", () => {
    const testMessage = "test";

    const testError = new ValidationError(testMessage);

    expect(testError.message).toBe(testMessage);
  });
});
