/* 
This spec validates Login, Logout, Open new account and Tranfer funds functions from ParaBank application
By default, playwright specs and tests inside the spec also run in parallel
The tests in this spec are specified to run sequentially because the parabank application used here does not store the registered user details for a long period and hence the tests are dependent
*/

import { expect } from '@playwright/test'
import test from '../../testFixtures/fixture'
import helpers from '../../utilities/helpers'
import * as config from '../../config'

let testData: any;

test.beforeAll(() => {
    testData = helpers.getUpdatedTestData()
});

test.describe.configure({ mode: 'serial' }); // ensures same worker. Tests in this spec dont run in parallel.
test.describe("ParaBank Automation", () => {

    test('Open New Account Journey', { tag: '@smoke' }, async ({ loginPage, registerPage, accServicesPage }) => {
        await test.step("Register a new user", async () => {
            await loginPage.navigateToHomePage()
            await registerPage.register(testData)
            //expect(await registerPage.getTitle()).toBe("ParaBank | Customer Created")
            expect(await registerPage.getWelcomeTitle()).toContain(`${config.welcomeText} ${testData.registerationDetails.fName}`)
            expect(await registerPage.getText()).toContain(config.accCreationSuccessMsg)
        })
        await test.step("Open new Account", async () => {
            await accServicesPage.openNewAcc()
            expect(await accServicesPage.getAccResultTitle()).toContain(config.accResultTitle)
            expect(await accServicesPage.getAccResultMessage()).toContain(config.accResultMessage)
            expect(await accServicesPage.getAccNum()).not.toBe(0)
        })
    })

    test('Transfer funds Journey', async ({ loginPage, transferFundsPage, logoutPage }) => {
        await test.step("Login", async () => {
            await loginPage.navigateToHomePage()
            await loginPage.login(testData.registerationDetails.username, testData.registerationDetails.password)
        })
        await test.step("Transfer Funds", async () => {
            await transferFundsPage.goToTransferFunds()
            await transferFundsPage.transferFunds(testData.transferDetails.amount)
            expect(await transferFundsPage.getTransferCompleteMessage()).toContain(config.transferCompleteMsg)
            expect(await transferFundsPage.getTransferedAmt()).toContain(`$${testData.transferDetails.amount}`)
        })
        await test.step("Logout", async () => {
            await logoutPage.logout()
            expect(await loginPage.getMessage()).toContain(config.loginMessage)
        })
    })
    //Skip test using test.skip
    test.skip('Login using invalid creds', async ({ loginPage }) => {
        await loginPage.navigateToHomePage()
        await loginPage.login(testData.invalidLoginCredentials.username, testData.invalidLoginCredentials.password)
        expect(await loginPage.getErrorMsg()).toEqual(config.errorMsg)
    })
})