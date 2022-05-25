const puppeteer = require('puppeteer');

const iPhone = puppeteer.devices['iPhone 11'];

(async function () {
  const browser = await puppeteer.launch({
    headless: false,
  });

  const page = await browser.newPage();

  await page.setViewport({
    width: 1200,
    height: 800,
  });

  await page.emulate(iPhone);

  await page.goto('https://visa.vfsglobal.com/blr/ru/pol/book-an-appointment');

  await page.waitForSelector('.lets-get-started');
  await page.waitForTimeout(1000);
  await page.click('.lets-get-started');

  await page.waitForSelector('.submitbtn');
  await page.screenshot({ path: 'screenshot.png' });

  await browser.close();
})();
