process.env = {
  ...process.env,
  __NEXT_IMAGE_OPTS: {
      deviceSizes: [320, 420, 768, 1024, 1200],
      imageSizes: [],
      domains: ["static.ghost.org"],
      path: "/_next/image",
      loader: "default",
  },
};

module.exports = {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  // setupFiles: ['<rootDir>/.jest/setEnvVars.js', 'jest-localstorage-mock'],  // 
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
  },
}
