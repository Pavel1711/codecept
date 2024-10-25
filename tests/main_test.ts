Feature('Главная страница');

let url = '/';

Scenario('Проверка шапки', ({ basePage }) => {
    basePage.checkHeader(url);
});

Scenario('Проверка баннера', ({ blocksPage }) => {
    blocksPage.checkBanner(url);
});

Scenario('Проверка блока подписки', ({ blocksPage }) => {
    blocksPage.checkSubscribeBlock(url);
});
