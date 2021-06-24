import { chromium, Browser, Page } from 'playwright';

let browser: Browser;
let page: Page;

beforeAll(async () => {
  browser = await chromium.launch();
});

afterAll(async () => {
  await browser.close();
});

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(async () => {
  await page.close();
});

describe('Open github page', () => {
  it('should have correct title', async () => {
    await page.goto('https://github.com/');

    expect(await page.title()).toBe(
      'GitHub: Where the world builds software · GitHub'
    );

    await page.screenshot({ path: `screenshots/demo-01.png` });
  });
});
