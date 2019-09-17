module.exports = {
  setupFiles: [
    '<rootDir>/jest.setup'
  ],
  verbose: false,
  roots: ["../../src"],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    ".+\\.(css|styl|less|sass|scss)$": "jest-transform-css"
  },
  testMatch: [
    '**/src/**/*.(test|spec).(jsx|tsx|js|ts)'
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  moduleNameMapper: {
    '^@app/(.*)': '<rootDir>/client/$1',
  },
  testEnvironment: 'node'
}
