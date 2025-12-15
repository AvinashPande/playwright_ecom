import { test, expect } from "@playwright/test";


test("Login User with correct email and password", async ({ page }) => {

    await page.goto("http://automationexercise.com");
    await expect(page.locator(".item h2").first()).toContainText(
        "Full-Fledged practice website for Automation Engineers"
    ); // Verify that home page is visible successfully
    await page.locator('a[href="/login"]').click(); // Click on 'Signup / Login' button
    await expect(page.locator(".login-form h2")).toContainText(
        "Login to your account"
    ); // Verify 'Login to your account' is visible
    // Enter correct email address and password
    await page
        .locator('[data-qa="login-email"]')
        .fill("Avinash_pandey@yopmail.com");
    await page.locator('[data-qa="login-password"]').fill("Admin@123");
    await page.locator('[data-qa="login-button"]').click(); // Click 'login' button

    await expect(page.locator("#header")).toContainText("Logged in as"); // Verify that 'Logged in as username' is visible

    await page.locator('a[href="/delete_account"]').click(); // Click 'Delete Account' button

    await expect(page.locator('[data-qa="account-deleted"]')).toContainText(
        "Account Deleted!"
    ); // Verify that 'ACCOUNT DELETED!' is visible
});

test('Login User with incorrect email and password', async ({ page }) => {

    await page.goto("http://automationexercise.com");
    await expect(page.locator(".item h2").first()).toContainText(
        "Full-Fledged practice website for Automation Engineers"
    ); // Verify that home page is visible successfully
    await page.locator('a[href="/login"]').click(); // Click on 'Signup / Login' button
    await expect(page.locator(".login-form h2")).toContainText(
        "Login to your account"
    ); // Verify 'Login to your account' is visible
    // Enter incorrect email address and password
    await page.locator('[data-qa="login-email"]').fill("Invalid@yopmail.com");

    await page.locator('[data-qa="login-password"]').fill("Invalid@123");
    await page.locator('[data-qa="login-button"]').click(); // Click 'login' button

    await expect(page.locator('.login-form')).toContainText('Your email or password is incorrect!')


})
