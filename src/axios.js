require("dotenv").config({ path: "../.env" });
const Axios = require("axios");
const Constants = require("./constants");

module.exports = Axios.create({
  baseURL: Constants.URLS.DO_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.DIGITALOCEAN_API_TOKEN_TEST_ACC}`,
  },

  timeout: 3000, // default is `0` (no timeout)
  withCredentials: true, // default
  responseType: "json", // default
  maxBodyLength: 10000,
});
