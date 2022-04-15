require("dotenv").config({ path: "../.env" });
const Axios = require("axios");
const Constants = require("./constants");

module.exports = Axios.create({
  // `baseURL` will be prepended to `url` unless `url` is absolute.
  // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
  // to methods of that instance.
  baseURL: Constants.URLS.DO_BASE_URL,

  // `transformRequest` allows changes to the request data before it is sent to the server
  // This is only applicable for request methods 'PUT', 'POST', 'PATCH' and 'DELETE'
  // The last function in the array must return a string or an instance of Buffer, ArrayBuffer,
  // FormData or Stream
  // You may modify the headers object.
  transformRequest: [
    function (data, headers) {
      // Do whatever you want to transform the data

      return data;
    },
  ],

  // `transformResponse` allows changes to the response data to be made before
  // it is passed to then/catch
  transformResponse: [
    function (data) {
      // Do whatever you want to transform the data
      return data;
    },
  ],

  // `headers` are custom headers to be sent
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.DIGITALOCEAN_API_TOKEN}`,
  },

  // `timeout` specifies the number of milliseconds before the request times out.
  // If the request takes longer than `timeout`, the request will be aborted.
  timeout: 3000, // default is `0` (no timeout)

  // `withCredentials` indicates whether or not cross-site Access-Control requests
  // should be made using credentials
  withCredentials: true, // default

  // `responseType` indicates the type of data that the server will respond with
  // options are: 'arraybuffer', 'document', 'json', 'text', 'stream'
  //   browser only: 'blob'
  responseType: "json", // default

  // `maxBodyLength` (Node only option) defines the max size of the http request content in bytes allowed
  maxBodyLength: 10000,

  // `validateStatus` defines whether to resolve or reject the promise for a given
  // HTTP response status code. If `validateStatus` returns `true` (or is set to `null`
  // or `undefined`), the promise will be resolved; otherwise, the promise will be
  // rejected.
  validateStatus: function (status) {
    return status >= 200 && status < 300; // default
  },

  // `maxRedirects` defines the maximum number of redirects to follow in node.js.
  // If set to 0, no redirects will be followed.
  maxRedirects: 0, // default
});
