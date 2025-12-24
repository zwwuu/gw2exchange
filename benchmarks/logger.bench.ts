import { bench, describe } from "vitest";

// Simple string manipulation benchmark for demonstration
describe("String Operations", () => {
  bench("concatenation", () => {
    let result = "";
    for (let i = 0; i < 100; i++) {
      result += `Log message ${i}: This is a test message\n`;
    }
  });

  bench("template literals", () => {
    let result = "";
    for (let i = 0; i < 100; i++) {
      result += `Log message ${i}: This is a test message\n`;
    }
  });

  bench("array join", () => {
    const messages = [];
    for (let i = 0; i < 100; i++) {
      messages.push(`Log message ${i}: This is a test message`);
    }
    messages.join("\n");
  });
});

describe("JSON Operations", () => {
  const testData = {
    timestamp: "2023-01-01T00:00:00.000Z",
    level: "info",
    message: "Test message",
    metadata: {
      user: "test-user",
      action: "test-action",
      details: { foo: "bar", baz: 123 },
    },
  };

  bench("JSON.stringify", () => {
    JSON.stringify(testData);
  });

  bench("JSON.parse after stringify", () => {
    const str = JSON.stringify(testData);
    JSON.parse(str);
  });
});
