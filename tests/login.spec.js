const { test } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');
const { DashboardPage } = require('../pages/DashboardPage');
const { users } = require('../test-data/users');

test.describe('OrangeHRM Login', () => {

    test('should login successfully with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const dashboardPage = new DashboardPage(page);

        await loginPage.navigate();

        await loginPage.login(
            users.validUser.username,
            users.validUser.password
        );

        await dashboardPage.verifyDashboardDisplayed();
    });

    test('should show error with invalid password', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.navigate();

        await loginPage.login(
            users.validUser.username,
            'wrongpassword'
        );

        await loginPage.verifyInvalidCredentialsMessageVisible();
    });

});