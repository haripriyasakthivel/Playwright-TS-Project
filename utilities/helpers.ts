import testData from '../testData/testData.json'
const timestamp = Date.now()
const randomString = Math.random().toString(36).substring(2, 7) //5 letter random string

class Helpers {
    getRandomUserName(): string {
        return `${randomString}-${timestamp}`
    }

    getRandomName(): string {
        return `${randomString}`
    }

    getUpdatedTestData(): any {
        let newTestData = JSON.parse(JSON.stringify(testData))
        //if username/password already exist, just return
        if (newTestData.registerationDetails.username && newTestData.registerationDetails.password) {
            return newTestData
        }
        const randomName = this.getRandomName();
        const randomUsername = this.getRandomUserName();
        newTestData.registerationDetails.fName = randomName
        newTestData.registerationDetails.lName = randomName
        newTestData.registerationDetails.username = randomUsername
        newTestData.registerationDetails.password = randomName
        newTestData.registerationDetails.confirmPwd = randomName
        return newTestData
    }
}
export default new Helpers