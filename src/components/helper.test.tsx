import { randomMessage } from "./helper";

describe("randomMessage", () => {
  it("should return a random message", () => {
    const subject = randomMessage();
    expect(typeof subject).toBe("string");
  });
  it("should return a random message", () => {
    const subject = randomMessage();
    expect(subject.length).not.toEqual(0);
  });
});
