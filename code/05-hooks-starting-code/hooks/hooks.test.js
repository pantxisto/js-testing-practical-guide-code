import {
  it,
  expect,
  beforeAl,
  beforeEach,
  afterAll,
  afterEach,
  beforeAll,
} from "vitest";

import { User } from "./hooks";

let user;
let testEmail;

beforeAll(() => {
  console.log("beforeAll()");
});

beforeEach(() => {
  console.log("beforeEach()");
  testEmail = "test@test.com";
  user = new User(testEmail);
});

afterEach(() => {
  console.log("afterEach()");
});

afterAll(() => {
  console.log("afterAll()");
});

it.concurrent("should update the email", () => {
  const newTestEmail = "test2@test.com";
  user.updateEmail(newTestEmail);
  expect(user.email).toBe(newTestEmail);
});

it.concurrent("should have an email property", () => {
  expect(user).toHaveProperty("email");
});

it("should store the provided email value", () => {
  expect(user.email).toBe(testEmail);
});

it("should clear the email", () => {
  user.clearEmail();
  expect(user.email).toBe("");
});

it("should still have an email property after clearing the email", () => {
  user.clearEmail();
  expect(user).toHaveProperty("email");
});
