import axios from "axios";

const withBody = (requestObject) => {
  return axios({
    method: requestObject.method,
    url: requestObject.url,
    headers: requestObject.headers,
    data: requestObject.data,
  });
};

const withoutBody = (requestObject) => {
  return axios({
    method: requestObject.method,
    url: requestObject.url,
    headers: requestObject.headers
  });
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { withBody,withoutBody};