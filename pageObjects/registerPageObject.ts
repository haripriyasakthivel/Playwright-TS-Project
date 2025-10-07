const registerPageLocators: Record<string, string> = {
    "registerLink": "Register",
    "fName": ".input[id='customer.firstName']",
    "lName": ".input[id='customer.lastName']",
    "ssn": ".input[id='customer.ssn']",
    "address": ".input[id='customer.address.street']",
    "city": ".input[id='customer.address.city']",
    "state": ".input[id='customer.address.state']",
    "zipCode": ".input[id='customer.address.zipCode']",
    "phone": ".input[id='customer.phoneNumber']",
    "username": ".input[id='customer.username']",
    "password": ".input[id='customer.password']",
    "confirmPwd": ".input[id='repeatedPassword']",
    "registerBtn": "input[value='Register']"
}
export default registerPageLocators