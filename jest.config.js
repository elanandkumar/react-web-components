module.exports = {
  setupFilesAfterEnv: ["<rootDir>/setupTest.js"],
  resetMocks: true,
  resetModules: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "packages/**/src/*.js",
    "!packages/**/dist/**",
    "!**/node_modules/**",
    "!**/*.story.js"
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  coverageReporters: ["lcov", "html"],
  coveragePathIgnorePatterns: ["<rootDir>node_modules/", "<rootDir>coverage/"],
  testMatch: ["**/?(*.)(spec).js?(x)"],
  testPathIgnorePatterns: ["<rootDir>node_modules/"]
};
