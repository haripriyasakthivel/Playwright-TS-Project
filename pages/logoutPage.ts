import { Page, Locator } from "@playwright/test"

export class LogoutPage {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
    }

    //function to logout 
    async logout(): Promise<void> {
        await this.page.getByText("Log Out").click()
    }
}
export default LogoutPage