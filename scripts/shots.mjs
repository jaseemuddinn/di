import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const BASE = process.env.BASE ?? "http://localhost:3200";
const OUT = "shots";
const only = process.argv[2];

const pages = [
  ["home", "/"],
  ["work", "/work"],
  ["project", "/work/residence-house"],
  ["studio", "/studio"],
  ["contact", "/contact"],
].filter(([name]) => !only || name === only);

await mkdir(OUT, { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
});
const page = await ctx.newPage();

for (const [name, path] of pages) {
  await page.goto(`${BASE}${path}`, { waitUntil: "networkidle" });
  // Entrance reveals run up to ~1.7s; capture only once they have settled.
  await page.waitForTimeout(2600);
  await page.screenshot({ path: `${OUT}/${name}-top.png` });

  // Lenis intercepts programmatic scrolling, so drive it with real wheel
  // events and let the in-view reveals fire before the full-page capture.
  const height = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < height; y += 500) {
    await page.mouse.wheel(0, 500);
    await page.waitForTimeout(240);
  }
  await page.waitForTimeout(1400);
  await page.mouse.wheel(0, -height - 2000);
  await page.waitForTimeout(1600);
  await page.screenshot({ path: `${OUT}/${name}-full.png`, fullPage: true });
  console.log("captured", name);
}

await browser.close();
