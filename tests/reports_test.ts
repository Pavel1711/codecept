Feature('Страница отчётов');

url = '/reports';

Scenario('Проверка шапки', ({ basePage }) => {
  basePage.checkHeader(url);
});

Scenario('Проверка кнопки "Показать ещё"', ({ blocksPage }) => {
  blocksPage.checkMoreButton(url);
});

