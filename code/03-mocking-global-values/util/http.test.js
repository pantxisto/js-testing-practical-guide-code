import { it, expect, describe, vi } from "vitest";
import { HttpError } from "./errors";
import { sendDataRequest } from "./http";

const testResponseData = { testKey: "testData" };

const testFetchFn = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    if (typeof options.body != "string") {
      return reject("Not a string.");
    }
    const testResponse = {
      ok: true,
      json: () => {
        return new Promise((resolve, reject) => {
          resolve(testResponseData);
        });
      },
    };
    resolve(testResponse);
  });
});
vi.stubGlobal("fetch", testFetchFn);

it("should return any available response data", () => {
  const testData = { key: "test" };

  return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
});

it("should convert the provided data to JSOn before sending the request", async () => {
  const testData = { key: "test" };

  let errMessage;
  try {
    await sendDataRequest(testData);
  } catch (err) {
    errMessage = err;
  }

  expect(errMessage).not.toEqual("Not a string.");
});

it("should throw and HttpError in case of non-ok response", () => {
  testFetchFn.mockImplementationOnce((url, options) => {
    return new Promise((resolve, reject) => {
      if (typeof options.body != "string") {
        return reject("Not a string.");
      }
      const testResponse = {
        ok: false,
        json: () => {
          return new Promise((resolve, reject) => {
            resolve(testResponseData);
          });
        },
      };
      resolve(testResponse);
    });
  });
  const testData = { key: "test" };
  return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);
});
