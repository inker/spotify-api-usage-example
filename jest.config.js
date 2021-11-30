process.env.TZ = 'Europe/London'

module.exports = {
  // verbose: true,
  testEnvironment: 'jsdom',
  modulePaths: [
    '<rootDir>',
  ],
  moduleNameMapper: {
    '^App/(.*)$': '<rootDir>/src/$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
  },
  moduleFileExtensions: [
    'js',
    'json',
    'vue',
  ],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/@vue/vue2-jest',
  },
  snapshotSerializers: [
    'jest-serializer-vue',
  ],
  testPathIgnorePatterns: [
    '__tests__/data',
  ],
}
