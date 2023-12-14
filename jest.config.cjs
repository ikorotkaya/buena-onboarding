/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFiles: ["./src/setupTests.ts"],
  collectCoverageFrom: [
    "src/**",
    "!src/**/stories/*"
  ],
  coverageThreshold: {
    global: {
      lines: 30
    }
  }
};
