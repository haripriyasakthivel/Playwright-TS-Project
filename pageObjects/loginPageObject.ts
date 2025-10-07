//this is a locator file for login page
//It is type safe - all key and values are of type string
//It can also be written as
// const loginPageLocators: {
// username: string,
//password: string
//} = {
//username: "#username",
//password: "#password"
//}

const loginPageLocators: Record<string, string> = { //Record is an object with string keys and string values
    "username": ".login [name = 'username']",
    "password": ".login [name = 'password']",
    "loginBtn": ".login [value = 'Log In']",
    "loginMessage": "#leftPanel h2",
    "errorMsg": ".error"
}

export default loginPageLocators