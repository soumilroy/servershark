module.exports = {
  URLS: {
    DO_BASE_URL: "https://api.digitalocean.com/v2/",
    DO_USER_INFORMATION: "/account",
    DO_CUSTOMER_BALANCE: "/customers/my/balance",
    DO_LIST_ALL_INVOICES: "/customers/my/invoices",
    DO_LIST_BILLING_HISTORY: "/customers/my/billing_history",
    DO_GET_INVOICE_BY_ID: (uuid) => `/invoices/${uuid}`,
    DO_LIST_ALL_DOMAINS: "/domains",
  },
};
