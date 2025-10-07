/*
This spec validates the responses for POST and GET requests 
All tests in this spec runs in parallel
*/
import { test, expect } from "@playwright/test";
import helper from '../../utilities/helpers';
let randomEmail: string, baseUrl: string;

test.beforeAll(() => {
    randomEmail = helper.getRandomUserName();
    baseUrl = `${test.info().project.use.baseURL}`;
})

test("Create new user and Login - POST method", async ({ request }) => {
    await test.step('Register a new user', async () => {
        const response = await request.post(`${baseUrl}/api/createAccount`, {
            form: {
                name: "Andrew",
                email: `${randomEmail}@gmail.com`,
                password: "test123",
                title: "Mr",
                birth_date: "11",
                birth_month: "11",
                birth_year: "2001",
                firstname: "Andrew",
                lastname: "Simons",
                company: "Xyz",
                address1: "test",
                address2: "test",
                country: "Aus",
                zipcode: "3001",
                state: "Vic",
                city: "Mel",
                mobile_number: "12345"
            },
            ignoreHTTPSErrors: true
        });

        const responseBody = await response.json();
        expect(responseBody.responseCode).toBe(201);
        expect(responseBody.message).toBe("User created!");
    })
    await test.step('Login with registered user creds', async () => {
        const response = await request.post(`${baseUrl}/api/verifyLogin`, {
            form: {
                email: `${randomEmail}@gmail.com`,
                password: 'test123'
            }
        });

        const responseBody = await response.json();
        expect(responseBody.responseCode).toBe(200);
        expect(responseBody.message).toBe("User exists!");
    });
});

test('Login with invalid creds - POST method', async ({ request }) => {
    const response = await request.post(`${baseUrl}/api/verifyLogin`, {
        form: {
            email: `${randomEmail}1@gmail.com`,
            password: 'test123'
        },
    });

    const responseBody = await response.json();
    expect(responseBody.responseCode).toBe(404);
    expect(responseBody.message).toBe("User not found!");
});

test("Get the list of products - GET method ", async ({ request }) => {
    const response = await request.get(`${baseUrl}/api/productsList`, {
    });
    const responseBody = JSON.parse(await response.text());
    //console.log(responseBody);
    expect(responseBody.responseCode).toBe(200);
    expect(responseBody.products).not.toBeNull
    expect(responseBody.products.length).toBeGreaterThan(1)
});