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

describe('Should open google page', () => {
  it('should have correct title', async () => {
    await page.goto('https://www.google.com/');
    expect(await page.title()).toBe('Google');
    await page.screenshot({ path: `demo.png` });
  });
});
