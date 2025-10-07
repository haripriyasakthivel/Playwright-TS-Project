import { test as fixture, Page } from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { RegisterPage } from '../pages/registrationPage'
import { AccServicesPage } from '../pages/accountServicesPage'
import { LogoutPage } from '../pages/logoutPage'
import { TransferFundsPage } from '../pages/transferFundsPage'

const test = fixture.extend<{
    loginPage: LoginPage
    registerPage: RegisterPage
    accServicesPage: AccServicesPage
    logoutPage: LogoutPage
    transferFundsPage: TransferFundsPage
}>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    },
    registerPage: async ({ page }, use) => {
        await use(new RegisterPage(page))
    },
    accServicesPage: async ({ page }, use) => {
        await use(new AccServicesPage(page))
    },
    logoutPage: async ({ page }, use) => {
        await use(new LogoutPage(page))
    },
    transferFundsPage: async ({ page }, use) => {
        await use(new TransferFundsPage(page))
    }

})
export default test