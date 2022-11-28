const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
  ],
  testEnvironment: "jest-environment-jsdom"
};

module.exports = createJestConfig(customJestConfig);