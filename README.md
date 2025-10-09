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

- [Node.js](https://nodejs.org/en/download/) (v14 or higher)
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

This Playwright project can be run in Jenkins by configuring the Job to take the script in Jenkinsfile from the Github repo. Also, to send email notification after every build, set up global email notification configurations in Jenkins.

**Pipeline steps**
1. Checkout latest changes from Git
2. Sets up Node.js
3. Installs all the dependencies
4. Installs Playwright
5. Runs all the test
6. Publish HTML report
7. Sends Email notification to the mentioned user email with Build Status, Build Number and Build URL
