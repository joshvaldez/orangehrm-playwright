const { test } = require('../../fixtures/test');

const { users } = require('../../test-data/users');

test.describe('Login Test Suite', () => {

    test('should login successfully with valid credentials', async ({ loginPage, dashboardPage }) => {
        await loginPage.navigate();

        await loginPage.login(
            users.validUser.username,
            users.validUser.password
        );

        await dashboardPage.verifyDashboardDisplayed();
    });

    test('should display invalid credentials for invalid password', async ({ loginPage }) => {
        await loginPage.navigate();

        await loginPage.login(
            users.validUser.username,
            'wrongpassword'
        );

        await loginPage.verifyInvalidCredentialsMessageVisible();
    });

    test('should display invalid credentials for invalid username', async ({ loginPage }) => {
        await loginPage.navigate();

        await loginPage.login(
            'wrongusername',
            users.validUser.password
        );

        await loginPage.verifyInvalidCredentialsMessageVisible();
    });

    test('should display required message when username is empty', async ({ loginPage }) => {
        await loginPage.navigate();
        
        await loginPage.login(
            '',
            users.validUser.password
        );
        await loginPage.verifyUsernameRequiredMessage();
    });

    test('should display required message when password is empty', async ({ loginPage }) => {
        await loginPage.navigate();

        await loginPage.login(
            users.validUser.username,
            ''
        );
        await loginPage.verifyPasswordRequiredMessage();
    });
    test('should display required messages when username and password are empty', async ({ loginPage }) => {
        await loginPage.navigate();

        await loginPage.login(
            '',
            ''
        );
        await loginPage.verifyUsernameRequiredMessage();
        await loginPage.verifyPasswordRequiredMessage();
    });

});