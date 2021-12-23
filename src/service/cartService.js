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

const addToCart = (data) => {
    let token = localStorage.getItem("token");
    let reqobj = {
        method: "post",
        url: url.baseURL + "/cart/create-cart",
        headers: {
            authorization: `bearer ${token}`,
        },
        data: data,
    };
    return AxiosHelper.withBody(reqobj)
        .then((response) => {
            return response;
        })
        .catch((err) => {
            throw err;
        });
}

const updateCart=(data)=>{
    let token = localStorage.getItem("token");
    let reqobj = {
        method: "put",
        url: url.baseURL + "/cart/update-cart",
        headers: {
            authorization: `bearer ${token}`,
        },
        data: data,
    };
    return AxiosHelper.withBody(reqobj)
        .then((response) => {
            return response;
        })
        .catch((err) => {
            throw err;
        });
}

const deleteCart=(data)=>{
    let token = localStorage.getItem("token");
    let reqobj = {
        method: "delete",
        url: url.baseURL + "/cart/delete-cart",
        headers: {
            authorization: `bearer ${token}`,
        },
        data: data,
    };
    return AxiosHelper.withBody(reqobj)
        .then((response) => {
            return response;
        })
        .catch((err) => {
            throw err;
        });
}

const deleteOne=(data)=>{
    let token = localStorage.getItem("token");
    let reqobj = {
        method: "delete",
        url: url.baseURL + "/cart/delete-one",
        headers: {
            authorization: `bearer ${token}`,
        },
        data: data,
    };
    return AxiosHelper.withBody(reqobj)
        .then((response) => {
            return response;
        })
        .catch((err) => {
            throw err;
        });
}

const getCart=()=>{
    let token = localStorage.getItem("token");
    let reqobj = {
        method: "get",
        url: url.baseURL + "/cart/get-cart-items",
        headers: {
            authorization: `bearer ${token}`,
        },
    };
    return AxiosHelper.withoutBody(reqobj)
        .then((response) => {
            return response;
        })
        .catch((err) => {
            throw err;
        });
}

export default {
    getCart,
    updateCart,
    deleteCart,
    addToCart,
    deleteOne
};