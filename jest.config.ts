export default {
  transform: {
    "^.+.(t|j)sx?$": ["@swc/jest"],
  },
  coverageProvider: "v8",
  rootDir: "./",
  modulePaths: ["<rootDir>"],
  testRegex: ".*\\.spec\\.ts$",
};
