module.exports = {
  URLS: {
    DO_BASE_URL: "https://api.digitalocean.com/v2/",
    DO_USER_INFORMATION: "https://api.digitalocean.com/v2/account",
    DO_CUSTOMER_BALANCE: "https://api.digitalocean.com/v2/customers/my/balance",
    DO_LIST_ALL_INVOICES:
      "https://api.digitalocean.com/v2/customers/my/invoices",
    DO_LIST_BILLING_HISTORY:
      "https://api.digitalocean.com/v2/customers/my/billing_history",
    DO_GET_INVOICE_BY_ID: (uuid) =>
      `https://api.digitalocean.com/v2/invoices/${uuid}`,
    DO_LIST_ALL_DOMAINS: "https://api.digitalocean.com/v2/domains",
  },
};
