### Playwright Typescript Project for E2E and API tests
Test automation framework for end-to-end and API tests that are automated using Playwright with Typescript and Page Object Model Design Pattern, integrated with Jenkins CI

### Sample applications used 
- For E2E tests - https://parabank.parasoft.com 
- For API tests - https://automationexercise.com

### Project Structure

```
├── pageObjects/             # Page Object Model implementations
├── pages/                   # (optional) additional page abstractions
├── testData/                # Test datasets (JSON/CSV/etc)
├── testFixtures/            # Custom fixtures and test setup
├── tests/                   # Test Specs
│   ├── api/                 # API tests
│   └── e2e/                 # UI tests
├── utilities/               # Reusable helpers (API, assertions, etc)
├── config,ts                # Shared project configuration
├── Jenkinsfile              # Jenkins pipeline script
├── playwright.config.ts     # Playwright test runner config
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation
```
### Installations

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm)

1. **Clone the repository:**

```bash
git clone https://github.com/haripriyasakthivel/Playwright-TS-Project.git
```

2. **Install dependencies:**

```bash
npm install
```

3. **Install Playwright:**

```bash
npx playwright install --with-deps
```
### To Run Tests

**Run all the tests in all browsers with html report**

By default, tests are run in parallel and generates the test report.
```bash
npx playwright test
```
To view report 
```bash
npx playwright test --reporter=html && npx playwright show-report
```
**Run E2E test** 
```bash
npx playwright test tests/e2e/
```
**Run API test**
```bash
npx playwright test tests/api/
```
**Run smoke test**
```bash
npx playwright test --grep @smoke
```
**Run on specific browser in serial**
```bash
npx playwright test --workers=1 --project=api-chromium
```
**Record and generate tests**

This is a playwright code generator feature. This will open the given url in the browser and records the user interactions to generate the playwright test scripts
```bash
npx playwright codegen "https://parabank.parasoft.com/parabank/login.htm"
```
**npm scripts for all different types of run**

eg: npm run test:smoke
```bash
"scripts": {
    "test": "npx playwright test --reporter=html",
    "test:smoke": "npx playwright test --grep @smoke --project=e2e-chromium",
    "test:serial": "npx playwright test --workers=1 --project=api-chromium",
    "test:e2e": "npx playwright test tests/e2e/validateParabankFunctions.spec.ts",
    "test:api": "npx playwright test tests/api/apiTestCases.spec.ts",
    "test:record": "npx playwright codegen",
    "html-report": "npx playwright test --reporter=html && npx playwright show-report",
    "show-trace": "npx playwright show-trace"
  }
```
### CI Integration

This Playwright project can be executed in Jenkins by configuring the job to use the Jenkinsfile from the GitHub repository. To send email notifications after each build (successful or failed), configure the global email notification settings in Jenkins.

**Pipeline steps**
1. Checkout latest changes from Git
2. Sets up Node.js
3. Installs all the dependencies
4. Installs Playwright
5. Runs all the test
6. Publish HTML report
7. Sends Email notification to the mentioned user email with Build Status, Build Number and Build URL

**Test Report -** 

<img width="1010" height="941" alt="Screenshot 2025-10-09 at 5 29 53 pm" src="https://github.com/user-attachments/assets/5dc6221f-5682-4af1-bb83-816f3951d46a" />


**Jenkins Build -**

<img width="977" height="794" alt="Screenshot 2025-10-09 at 5 20 35 pm" src="https://github.com/user-attachments/assets/90fdc59c-b3c7-430c-a5f5-6e5db66f9f9b" />


**Email Notification -** 

<img width="690" height="339" alt="Screenshot 2025-10-09 at 5 22 18 pm" src="https://github.com/user-attachments/assets/3f1d932a-f813-4c35-8b70-139f23ed90c8" />


