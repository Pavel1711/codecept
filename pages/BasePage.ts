import { NAVS_DATA } from "../constants";

const { I } = inject();

export = {
  async checkHeader(url: string) {
    I.amOnPage(url);
    const logo = locate('//div[contains(@class, "desktopMenu")]/a');
    I.seeElement(logo); // Проверяем наличие логотипа

    const navItems = await I.grabTextFrom(locate('//div[contains(@class, "navs")]/a'));

    for (let i = 0; i < navItems.length; i++) {
      const text = navItems[i];
      const href = await I.grabAttributeFrom(locate(`//div[contains(@class, "navs")]/a[${i + 1}]`), 'href');
      I.assertEqual(text, NAVS_DATA[i].text);
      I.assertEqual(href, NAVS_DATA[i].url);
    }

    const helpNowButton = locate('//button[contains(@class, "helpNowPopup")]');
    I.seeElement(helpNowButton); // Проверяем наличие кнопки "Помощь"

    const notificationButton = locate('//div[contains(@class, "rightBlock")]/button[@title="Поиск"]');
    I.seeElement(notificationButton); // Проверяем наличие кнопки уведомлений

    const loginIcon = locate('//div[contains(@class, "styles_rightBlock__TQTq1")]/*[contains(@class, "loginIcon")]');
    I.seeElement(loginIcon); // Проверяем наличие иконки входа
  }
}
