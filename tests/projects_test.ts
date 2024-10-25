Feature('Страница проектов');

url = '/projects';

Scenario('Проверка шапки', ({ basePage }) => {
  basePage.checkHeader(url);
});

Scenario('Проверка кнопки "Показать ещё"', ({ blocksPage }) => {
  blocksPage.checkMoreButton(url);
});

