import AxiosHelper from "../helper/axios";
const url = require('../config/local');

const getAddress = () => {
    let token = localStorage.getItem("token");
    let reqobj = {
        method: "get",
        url: url.baseURL + "/address/get-address",
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

const createAddress = (data) => {
    let token = localStorage.getItem("token");
    let reqobj = {
        method: "post",
        url: url.baseURL + "/address/create-address",
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

export default {
    createAddress,
    getAddress
}