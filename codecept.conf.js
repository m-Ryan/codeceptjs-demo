require('ts-node/register');

exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://cms.maocanhua.cn',
      show: true,
      browser: 'chromium',
    },
  },
  include: {
    I: './steps_file.js',
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/**/*.feature',
    steps: ['./step_definitions/common/login.ts'],
  },
  plugins: {
    screenshotOnFail: {
      enabled: true,
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true,
    },
    tryTo: {
      enabled: true,
    },
  },
  tests: 'features/**/*.test.ts',
  name: 'codeceptjs-demo',
};
