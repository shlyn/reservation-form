module.exports = {
  moduleFileExtensions: ["js"],
  coveragePathIgnorePatterns: ["/node_modules/", "enzyme.js"],
  setupTestFrameworkScriptFile: "<rootDir>/enzyme.js",
  snapshotSerializers: ["enzyme-to-json/serializer"]
};
