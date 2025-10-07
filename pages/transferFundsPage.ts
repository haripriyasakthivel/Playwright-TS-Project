import { expect, Page, Locator } from "@playwright/test"
import BasePage from "./basePage"
import transferFundsPageLocator from "../pageObjects/transferFundsPageObject"

export class TransferFundsPage extends BasePage {
    constructor(page: Page) {
        super(page)
    }

    async transferFunds(amount: string): Promise<void> {
        await this.fillField(transferFundsPageLocator.enterAmount, amount)
        await this.page.selectOption(transferFundsPageLocator.fromAcc, { index: 0 })
        await this.page.selectOption(transferFundsPageLocator.toAcc, { index: 1 })
        await this.page.click(transferFundsPageLocator.transferBtn)
        await this.wait()
    }

    async goToTransferFunds(): Promise<void> {
        await this.waitForPageLoad()
        await this.page.getByText(transferFundsPageLocator.transferFundsLink).click()
        expect(await this.getWelcomeTitle()).not.toBeUndefined
    }

    async getTransferCompleteMessage(): Promise<string> {
        return this.page.locator(transferFundsPageLocator.transferMsg).innerText()
    }

    async getTransferedAmt(): Promise<string> {
        return this.page.locator(transferFundsPageLocator.tranferamt).innerText()
    }
}