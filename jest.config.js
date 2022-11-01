 module.exports = {
  testIgnorePatterns: ["/node_modules", "/.next/"],
  collectCoverage: true,
  coverageDirectory: "coverage",
  moduleNameMapper: { '\\.(css|less|scss|sass)$': 'identity-obj-proxy'},
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(jsx)?$":  [
      "@swc/jest",
      {
        jsc: {
          parser: {

            jsx: true,
            decorators: true,
          },
          keepClassNames: true,
          transform: {
            legacyDecorator: true,
            decoratorMetadata: true,
            react: {
              runtime: "automatic",
            },
          },
        },
        module: {
          type: "es6",
          noInterop: false,
        },
      },
    ],
  },
};
