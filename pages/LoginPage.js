class LoginPage {
    constructor(page) {
        this.page = page;

        this.usernameInput = page.getByRole('textbox', {
            name: 'Username'
        });
        this.passwordInput = page.getByRole('textbox', {
            name: 'Password'
        });
        this.loginButton = page.getByRole('button', {
            name: 'Login'
        });

        this.invalidCredentialsMessage = page.getByText('Invalid credentials');
        this.usernameRequiredMessage = page.getByText('Required').first();
        this.passwordRequiredMessage = page.getByText('Required').last();
    }

    async navigate() {
        await this.page.goto(
            'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
        );
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async verifyInvalidCredentialsMessageVisible() {
        await this.invalidCredentialsMessage.waitFor({
            state: 'visible'
        });
    }

    async verifyUsernameRequiredMessage() {
        await this.usernameRequiredMessage.waitFor({
            state: 'visible'
        });
    }

    async verifyPasswordRequiredMessage() {
        await this.passwordRequiredMessage.waitFor({
            state: 'visible'
        });
    }
}

module.exports = { LoginPage };