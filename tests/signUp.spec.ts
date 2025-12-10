import{test, expect} from '@playwright/test';


test(" Playwright practice", async({page}) =>{

    await page.goto("http://automationexercise.com");

    await expect(page.locator('[alt="Website for automation practice"]')).toBeVisible();

    await expect (page.locator('a[href="/login"]')).toBeVisible();

    await page.locator('a[href="/login"]').click();

    await expect (page.getByText('New User Signup!')).toBeVisible();
    await page.locator('[data-qa="signup-name"]').fill("Avinash_pandey@yopmail.com");
    await page.locator('[data-qa="signup-email"]').fill("Admin@123");
    await page.click('[data-qa="signup-button"]');





} )

test.only("vans login test case", async({page}) => {

    await page.goto('https://www.vans.com/en-us');
    await page.locator('[data-test-id="menu-section"] [aria-label="My Account"]').click();
    await page.locator('[data-test-id="base-form"] [type="email"]').fill('avinashvfc@yopmail.com');
     await page.locator('[data-test-id="base-form"] [data-test-id="vf-button"]').click(); 
     await page.locator('[data-test-id="base-form"] [type="password"]').fill('Admin@123'); 
     await page.locator('[data-test-id="base-form"] [data-test-id="vf-button"]').click(); 







})