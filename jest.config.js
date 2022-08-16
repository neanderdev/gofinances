module.exports = {
  preset: "jest-expo",
  testPathIgnorePatterns: ["/node-modules", "/android", "/ios"],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
};
