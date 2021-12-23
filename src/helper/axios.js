/* ************************************************************************
 * Execution        : 1. default node  cmd> node  index.js              
 * @descrition      : set up the react server 
 * @file            : server.js
 * @author          : Adarsh Bhandary
 * @version         : 1.0
 * @since           : 8-Dec-2021
 * 
 **************************************************************************/
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