import { webkit } from 'playwright';
import * as assert from 'assert';

(async () => {
  const browser = await webkit.launch();
  const page = await browser.newPage();
  await page.goto('https://www.google.com/');

  const title = await page.title();
  await page.screenshot({ path: `screenshots/demo.png` });

  assert.strictEqual('Google2', title);
  await browser.close();
})();
