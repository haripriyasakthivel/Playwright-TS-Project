import { Page, Locator } from "@playwright/test"
import BasePage from "./basePage"
import registerPageLocator from "../pageObjects/registerPageObject"

export class RegisterPage extends BasePage {
    constructor(page: Page) {
        super(page)
    }

    async register(testData: any): Promise<void> {
        await this.page.getByText(registerPageLocator.registerLink).click()
        await this.fillField(registerPageLocator.fName, testData.registerationDetails.fName)
        await this.fillField(registerPageLocator.lName, testData.registerationDetails.lName)
        await this.fillField(registerPageLocator.address, testData.registerationDetails.address)
        await this.fillField(registerPageLocator.city, testData.registerationDetails.city)
        await this.fillField(registerPageLocator.state, testData.registerationDetails.state)
        await this.fillField(registerPageLocator.zipCode, testData.registerationDetails.zip)
        await this.fillField(registerPageLocator.phone, testData.registerationDetails.phone)
        await this.fillField(registerPageLocator.ssn, testData.registerationDetails.ssn)
        await this.fillField(registerPageLocator.username, testData.registerationDetails.username)
        await this.fillField(registerPageLocator.password, testData.registerationDetails.password)
        await this.fillField(registerPageLocator.confirmPwd, testData.registerationDetails.confirmPwd)
        await this.page.click(registerPageLocator.registerBtn)
    }
}
