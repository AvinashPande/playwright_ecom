import { test, expect } from "@playwright/test";

test("single iframe", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Frames.html");

  const frameid = page.frameLocator("#singleframe");

  await frameid.locator('[type="text"]').fill("Frame handing");

  await page.waitForTimeout(10000);
});

test("Nested iframe", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Frames.html");

  await page.locator('a[href="#Multiple"]').click();
  //  await page.bringToFront()

  const outerFrame = page.frameLocator('[src="MultipleFrames.html"]');

  const innerFrame = outerFrame
    .locator('[src="SingleFrame.html"]')
    .last()
    .contentFrame();

  await innerFrame.locator('[type="text"]').last().fill("inner form handling");
  await page.waitForTimeout(6000);
});

test.only('iFrame 3', async ({page}) => {

    await page.goto('https://www.hyrtutorials.com/p/frames-practice.html');

    const frame3 = page.frameLocator('#frm3');

    const sel_val =  frame3.locator('#selectnav2').last().selectOption('Home');

    await expect(frame3.locator('.tysum-wrapper h2 a')).toContainText('Tutorials');

    //await  val.sele

   await page.waitForTimeout(6000)



})