// for named import like {LoginPage}, we need to give as, export class LoginPage {...}
// for default import like LoginPage, we need to simply give as, export default LoginPage
import { Page, Locator } from "@playwright/test"
import BasePage from "./basePage"
import loginPageLocators from "../pageObjects/loginPageObject"

export class LoginPage extends BasePage {
    constructor(page: Page) {
        super(page)
    }

    //function to login by filling username and password 
    async login(username: string, password: string): Promise<void> {
        await this.fillField(loginPageLocators.username, username)
        await this.fillField(loginPageLocators.password, password)
        await this.page.click(loginPageLocators.loginBtn)
        await this.waitForPageLoad()
    }

    //function to validate invalid user error 
    async getErrorMsg(): Promise<string> {
        return this.page.locator(loginPageLocators.errorMsg).innerText()
    }
}
export default LoginPage