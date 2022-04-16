#! /usr/bin/env node
const Constants = require("./constants");
const Axios = require("./axios");

function getAccountInformation() {
  return Axios(Constants.ENDPOINTS.DO_USER_INFORMATION);
}

function getInvoices() {
  return Axios(Constants.ENDPOINTS.DO_LIST_ALL_INVOICES);
}

function getAllDomains() {
  return Axios(Constants.ENDPOINTS.DO_LIST_ALL_DOMAINS);
}

// getAccountInformation().then(({ data }) => console.log(data));
getInvoices()
  .then(({ data }) => console.log(data))
  .catch(({ response }) => console.log(response.status, response.data.message));
// getAllDomains()
//   .then(({ data }) => console.log(data))
//   .catch((e) => console.log(e.message));
