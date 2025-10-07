const transferFundsPageLocators: Record<string, string> = {
    "transferFundsLink": "Transfer Funds",
    "enterAmount": "#transferForm #amount",
    "fromAcc": "select[id='fromAccountId']",
    "toAcc": "select[id='toAccountId']",
    "transferBtn": `input[value='Transfer'][type="submit"]`,
    "transferMsg": `#showResult h1.title`,
    "tranferamt": 'span#amountResult'
}
export default transferFundsPageLocators