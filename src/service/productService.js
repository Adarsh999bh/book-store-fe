/* ************************************************************************
 * Execution        : 1. default node  cmd> node  index.js              
 * @descrition      : set up the react server 
 * @file            : server.js
 * @author          : Adarsh Bhandary
 * @version         : 1.0
 * @since           : 8-Dec-2021
 * 
 **************************************************************************/
import AxiosHelper from "../helper/axios";
const url = require('../config/local');

const getBooks = (index,sortIndex) => {
    let token = localStorage.getItem("token");
    let reqobj = {
        method: "get",
        url: url.baseURL + "/product/get-products/" + index+"/"+sortIndex,
        headers: {
            authorization: `bearer ${token}`,
        }
    };
    return AxiosHelper.withoutBody(reqobj)
        .then((response) => {
            return response;
        })
        .catch((err) => {
            throw err;
        });
}

const searchBook = (searchVal) => {
    let token = localStorage.getItem("token");
    let reqobj = {
        method: "post",
        url: url.baseURL + "/product/search",
        headers: {
            authorization: `bearer ${token}`,
        },
        data: searchVal,
    };
    return AxiosHelper.withBody(reqobj)
        .then((response) => {
            return response;
        })
        .catch((err) => {
            throw err;
        });
};

export default {
    searchBook,
    getBooks
}