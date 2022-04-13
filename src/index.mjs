import dotenv from "dotenv";
dotenv.config({ path: "../.env" });
import fetch from "node-fetch";

const baseUrl = process.env.DIGITALOCEAN_BASEURL;

function getAccountInformation() {
  return fetch(`${baseUrl}"/account`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.DIGITALOCEAN_API_TOKEN}`,
    },
  });
}

function getInvoices() {
  return fetch(`${baseUrl}"/customers/my/invoices`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.DIGITALOCEAN_API_TOKEN}`,
    },
  });
}

getAccountInformation()
  .then((response) => response.json())
  .then((data) => console.log(data));

getInvoices()
  .then((response) => response.json())
  .then((data) => console.log(data));
