/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFiles: ["./src/setupTests.ts"],

  // coverageDirectory: "<rootDir>/coverage"
  collectCoverage: true,
  collectCoverageFrom: ["src/**"],
  coverageThreshold: {
    global: {
      lines: 30
    }
  }
};
