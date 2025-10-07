import { Page, Locator } from "@playwright/test"
import BasePage from "./basePage"
import accServicesPageLocator from "../pageObjects/accServicesPageObject"
export class AccServicesPage extends BasePage {
    constructor(page: Page) {
        super(page)
    }

    async openNewAcc(): Promise<void> {
        await this.page.getByText(accServicesPageLocator.openNewAccLink).click()
        await this.waitForPageLoad()
        await this.page.selectOption(accServicesPageLocator.accType, "SAVINGS")
        await this.page.selectOption(accServicesPageLocator.acc, { index: 0 }, { force: true })
        await this.page.click(accServicesPageLocator.newAccBtn)
    }

    async getAccNum(): Promise<string> {
        return this.page.locator(accServicesPageLocator.accId).innerText()
    }

    async getAccResultTitle(): Promise<string> {
        return this.page.locator(accServicesPageLocator.accResultTitle).innerText()
    }
    async getAccResultMessage(): Promise<string> {
        return this.page.locator(accServicesPageLocator.accResultMessage).first().innerText()
    }
}