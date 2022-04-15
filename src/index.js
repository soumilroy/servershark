const Constants = require("./constants");
const Axios = require("./axios");

function getAccountInformation() {
  return Axios(Constants.URLS.DO_USER_INFORMATION);
}

function getInvoices() {
  return Axios(Constants.URLS.DO_LIST_ALL_INVOICES);
}

function getAllDomains() {
  return Axios(Constants.URLS.DO_LIST_ALL_DOMAINS);
}

getAccountInformation().then(({ data }) => console.log(data));
// getInvoices().then(({ data }) => console.log(data));
// getAllDomains().then(({ data }) => console.log(data));
