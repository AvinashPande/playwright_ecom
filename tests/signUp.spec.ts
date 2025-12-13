import { test, expect } from "@playwright/test";

test("Register User", async ({ page }) => {
    await page.goto("http://automationexercise.com");

    await expect(
        page.locator('[alt="Website for automation practice"]')
    ).toBeVisible();

    await expect(page.locator('a[href="/login"]')).toBeVisible();

    await page.locator('a[href="/login"]').click();

    await expect(page.getByText("New User Signup!")).toBeVisible();
    await page.locator('[data-qa="signup-name"]').fill("Avinash_pandey");
    await page
        .locator('[data-qa="signup-email"]')
        .fill("Avinash_pandey@yopmail.com");
    await page.click('[data-qa="signup-button"]');

    await expect(page.getByText("Title", { exact: true })).toContainText("Title");

    await page.locator("#id_gender1").check();

    await expect(page.getByText("Name").first()).toContainText("Name");
    await expect(page.getByText("Email")).toContainText("Email");
    await expect(page.getByText("Password")).toContainText("Password");

    await page.locator("#password").fill("Admin@123");

    await expect(page.getByText("Date of Birth")).toContainText("Date of Birth");

    const dob_day = page.locator("#days");

    await dob_day.selectOption("3");

    const dob_month = page.locator("#months");

    await dob_month.selectOption("November");

    const dob_year = page.locator("#years");

    await dob_year.selectOption("1999");

    await expect(page.getByText("Sign up for our newsletter!")).toContainText(
        "Sign up for our newsletter!"
    );

    await page.locator("#newsletter").check();

    await expect(
        page.getByText("Receive special offers from our partners!")
    ).toContainText("Receive special offers from our partners!");

    await page.locator("#optin").check();

    await page.locator('#first_name').fill('Avinash');
    await page.locator('#last_name').fill('Pandey');
    await page.locator('#company').fill('Solomyfy pvt ltd');
    await page.locator('#address1').fill('Bengaluru');
    const country =  page.locator('#country')
    await country.selectOption('India');
    await page.locator('#state').fill('Karnataka');
    await page.locator('#city').fill('Bengaluru');
    await page.locator('#zipcode').fill('234345');
    await page.locator('#mobile_number').fill('45676556567');

    await page.getByRole('button', {name:'Create Account'}).click();




});

test.skip("vans login test case", async ({ page }) => {
    // await page.goto('https://www.vans.com/en-us');
    // await page.locator('[data-test-id="menu-section"] [aria-label="My Account"]').click();
    // await page.locator('[data-test-id="base-form"] [type="email"]').fill('avinashvfc@yopmail.com');
    //  await page.locator('[data-test-id="base-form"] [data-test-id="vf-button"]').click();
    //  await page.locator('[data-test-id="base-form"] [type="password"]').fill('Admin@123');
    //  await page.locator('[data-test-id="base-form"] [data-test-id="vf-button"]').click();
});
