class DashboardPage {
    constructor(page) {
        this.page = page;

        this.dashboardHeader = page.getByRole('heading', {
            name: 'Dashboard'
        });
    }

    async verifyDashboardDisplayed() {
        await this.dashboardHeader.waitFor({
            state: 'visible'
        });
    }
}

module.exports = { DashboardPage };