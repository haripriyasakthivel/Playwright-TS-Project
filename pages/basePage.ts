import { Page, Locator } from "@playwright/test";
import basePageLocators from "../pageObjects/basePageObject";
class BasePage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    // common function to fill the fields with string values
    async fillField(selector: string, textvalue: string): Promise<void> {
        await this.page.fill(selector, textvalue)
    }
    //go to home page
    async navigateToHomePage(): Promise<void> {
        await this.page.goto('/')
        this.page.waitForLoadState('domcontentloaded')
    }
    async getTitle(): Promise<string> {
        return await this.page.title()
    }
    async getText(): Promise<string> {
        return await this.page.locator(basePageLocators.rightPanel).innerText()
    }
    async getMessage(): Promise<string> {
        return await this.page.locator(basePageLocators.leftPanel).innerText()
    }
    async getWelcomeTitle(): Promise<string> {
        return await this.page.locator(basePageLocators.welcomeTile).first().innerText()
    }
    async wait(): Promise<void> {
        await this.page.waitForTimeout(2000)
    }
    async waitForPageLoad(): Promise<void> {
        await this.page.waitForLoadState('domcontentloaded')
    }

}
export default BasePage