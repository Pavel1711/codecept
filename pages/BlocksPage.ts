const { I } = inject();

export = {
    async checkBanner(url: string){
      I.amOnPage(url);
      const title = await I.grabTextFrom(locate('//div[contains(@class, "shortStatistic")]/p[contains(@class, "title")]'));
      const expectedTitle = 'Добро — место,где легко помогать';
      I.assertEqual(title, expectedTitle);

      const infoBannerElements = await I.grabTextFrom(locate('//a[contains(@class, "statistic")]/div[contains(@class, "info")]/p[contains(@class, "title4")]'));
      I.assertNotEqual(infoBannerElements[0], '0 честных фондов');
      I.assertNotEqual(infoBannerElements[1], '0 раз');

      const closeBannerEl = locate('//div[contains(@class, "shortStatistic")]/*[contains(@class, "close")]');
      I.seeElement(closeBannerEl); // Проверяем наличие кнопки закрытия
    },

    async checkSubscribeBlock(url: string) {
      I.amOnPage(url);
      const subscribeBlock = locate('//div[contains(@class, "subscribe")]');
      I.seeElement(subscribeBlock); // Проверяем, что блок подписки видимый

      const title = await I.grabTextFrom(locate('//div[contains(@class, "subscribe")]/div/p[contains(@class, "title")]'));
      const expectedTitle = 'Любите добро, как любим его мы?';
      I.assertEqual(title, expectedTitle);

      const subtitle = await I.grabTextFrom(locate('//div[contains(@class, "subscribe")]/div/span[contains(@class, "subTitle")]'));
      const expectedSubtitle = 'Подпишитесь на нашу рассылку и меняйте мир вместе с нами!';
      I.assertEqual(subtitle, expectedSubtitle);

      const input = locate('//div[contains(@class, "subscribe")]/div[contains(@class, "formItemBox")]/form/div/span/input[@type="email"]');
      I.fillField(input, 'test');

      const button = locate('//div[contains(@class, "subscribe")]/div[contains(@class, "formItemBox")]/button');
      I.seeElement(button); // Проверяем, что кнопка видима
      I.click(button);

      const alert = locate('//div[contains(@class, "subscribe")]/div[contains(@class, "formItemBox")]/form/div/span[@role="alert"]');
      // Ждем выполнения запроса
      I.wait(2);

      I.seeElement(alert); // Проверяем, что алерт виден
      if (!(await I.grabTextFrom(alert)).includes('Запрос был проигнорирован')) {
        I.see('Введите корректный e-mail', alert);
        I.fillField(input, 'test@mail.ru');
        I.click(button);
        if (!(await I.grabTextFrom(alert)).includes('Запрос был проигнорирован')) {
          I.see('', input); // Проверяем, что поле ввода пустое
        }
      }
    },


    async checkMoreButton(url: string) {
      I.amOnPage(url);
      const cardListContainer = await I.grabTextFrom(locate('//div[contains(@class, "cardListContainer")]'));
      for (let i = 0; i < cardListContainer.length; i++) {
        const cardsCountPrev = I.grabNumberOfElements(`//div[contains(@class, "cardListContainer")][${i + 1}]//div[contains(@class, "cardList")]//div`);
        I.click(locate(`//div[contains(@class, "cardListContainer")][${i + 1}]//div[contains(@class, "moreBtn")]//button`));
        // Ждем выполнения запроса
        I.wait(3);

        const cardsCountNew = I.grabNumberOfElements(`//div[contains(@class, "cardListContainer")][${i + 1}]//div[contains(@class, "cardList")]//div`);
        I.assertGreaterThan(cardsCountNew, cardsCountPrev);
      }
    }
}
