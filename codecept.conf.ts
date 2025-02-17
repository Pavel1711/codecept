import {
  setHeadlessWhen,
  setCommonPlugins
} from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: 'tests/*_test.ts',
  output: 'reports',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://dobro.mail.ru/',
      show: true
    }
  },
  include: {
    I: './steps_file',
    blocksPage: "./pages/BlocksPage.ts",
    basePage: "./pages/BasePage.ts",
  },
  name: 'codeceptjs'
}
