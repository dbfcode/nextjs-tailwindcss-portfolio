import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const url =
  process.argv[2] ||
  "https://streamhub-reactjs-nextjs-plataform-1ve71j6xo-dig-ies-projects.vercel.app/";
const outDir = path.join(process.cwd(), "public", "videos");
const outFile = path.join(outDir, "streamhub-demo.webm");

fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1280, height: 720 },
  recordVideo: {
    dir: outDir,
    size: { width: 1280, height: 720 },
  },
});
const page = await context.newPage();

try {
  await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(2500);
  await page.mouse.wheel(0, 600);
  await page.waitForTimeout(2000);
  await page.mouse.wheel(0, 600);
  await page.waitForTimeout(2000);
} catch (error) {
  console.warn("Navegação parcial:", error.message);
  await page.waitForTimeout(3000);
}

await context.close();
await browser.close();

const recorded = fs
  .readdirSync(outDir)
  .filter((f) => f.endsWith(".webm") && f !== path.basename(outFile));

if (recorded.length > 0) {
  const latest = recorded
    .map((f) => ({
      f,
      t: fs.statSync(path.join(outDir, f)).mtimeMs,
    }))
    .sort((a, b) => b.t - a.t)[0].f;
  fs.renameSync(path.join(outDir, latest), outFile);
  console.log("Gravado:", outFile);
} else {
  console.error("Nenhum vídeo gerado");
  process.exit(1);
}
