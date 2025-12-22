import {test, expect} from '@playwright/test';


test('login', async ({page}) => {


    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.locator('#userEmail').fill('avinashvfc@yopmail.com')
    await page.locator('#userPassword').fill('Admin@123')
    await page.locator('#login').click();

    await expect(page.locator('#res')).toContainText('Showing 3 results ');

    await page.locator('.card-body .btn.w-10').last().click();

    await page.locator('[routerlink="/dashboard/cart"]').click();

    await page.getByRole('button', {name : "Buy Now"}).click();

    await page.waitForTimeout(3000);
    await page.locator('[class="row"] [type="text"]').nth(1).fill('123');

    await page.getByPlaceholder('Select Country').fill('Indi');

    await page.keyboard.type('a')
    //await expect(page.locator('.ta-item').last()).toBeVisible()


     await page.locator('.ta-item').last().click();

     await page.waitForTimeout(3000);

     await page.locator('.action__submit').click();
});