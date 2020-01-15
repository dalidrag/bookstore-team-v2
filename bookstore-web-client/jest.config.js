module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  globals: {
    "ts-jest": {
      diagnostics: {
        ignoreCodes: [6133, 2339]
      }
    }
  }
};