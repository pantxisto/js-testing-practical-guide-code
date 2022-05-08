import { it, expect, describe, vi } from "vitest";
import { generateReportData } from "./data";

describe("generateReportData()", () => {
  it("should execute logFn if provided", () => {
    const logger = vi.fn(() => {});
    logger.mockImplementation(() => {})
    generateReportData(logger);
    expect(logger).toBeCalled();
  });
});
