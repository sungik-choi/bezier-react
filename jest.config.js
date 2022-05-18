module.exports = {
  projects: [
    '<rootDir>/packages/**/*',
  ],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  clearMocks: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "node",
};
