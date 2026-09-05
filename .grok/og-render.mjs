import { chromium } from "playwright";

const html = "file:///workspace/.grok/og-card.html";
const out = "/workspace/.grok/og-card-raw.png";
const executablePath =
  "/opt/pw-browsers/chromium_headless_shell-1234/chrome-headless-shell-linux64/chrome-headless-shell";

const browser = await chromium.launch({
  executablePath,
  args: ["--allow-file-access-from-files", "--disable-font-subpixel-positioning"],
});
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 2,
});
await page.goto(html, { waitUntil: "load" });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(120);
await page.screenshot({ path: out, type: "png", omitBackground: false });
await browser.close();
console.log("wrote", out);
