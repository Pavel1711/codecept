Feature('Страница завершённых проектов');

url = '/projects/done';

Scenario('Проверка шапки', ({ basePage }) => {
  basePage.checkHeader(url);
});

Scenario('Проверка кнопки "Показать ещё"', ({ blocksPage }) => {
  blocksPage.checkMoreButton(url);
});

