/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type blocksPage = typeof import('./pages/BlocksPage');
type basePage = typeof import('./pages/BasePage');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, blocksPage: blocksPage, basePage: basePage }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
