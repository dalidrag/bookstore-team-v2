module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transformIgnorePatterns: ["/node_modules/(?!jsdom-global/register/)"],
  globals: {
    "ts-jest": {
      diagnostics: {
        ignoreCodes: [6133, 2339]
      }
    }
  }
};
