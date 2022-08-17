module.exports = {
  preset: "jest-expo",

  testPathIgnorePatterns: ["/node-modules", "/android", "/ios"],

  transform: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/fileTransformer.js",
  },

  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect",
    "jest-styled-components",
  ],

  setupFiles: ["./path/to/jestSetupFile.js"],

  collectCoverage: true,

  collectCoverageFrom: ["src/**/*.tsx", "!src/**/*.spec.tsx"],

  coverageReporters: ["lcov"],
};
