require("dotenv").config({ path: "../.env" });
const Constants = require("./constants");
const Axios = require("axios");

const baseUrl = process.env.DIGITALOCEAN_BASEURL;

function getAccountInformation() {
  return Axios(Constants.URLS.DO_USER_INFORMATION, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.DIGITALOCEAN_API_TOKEN}`,
    },
  });
}

function getInvoices() {
  return Axios(Constants.URLS.DO_LIST_ALL_INVOICES, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.DIGITALOCEAN_API_TOKEN}`,
    },
  });
}

function getAllDomains() {
  return Axios(Constants.URLS.DO_LIST_ALL_DOMAINS, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.DIGITALOCEAN_API_TOKEN}`,
    },
  });
}

getAccountInformation().then(({ data }) => console.log(data));
getInvoices().then(({ data }) => console.log(data));
getAllDomains().then(({ data }) => console.log(data));
