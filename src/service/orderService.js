import AxiosHelper from "../helper/axios";
const url = require('../config/local');

const createOrder = (data) => {
    let token = localStorage.getItem("token");
    let reqobj = {
        method: "post",
        url: url.baseURL + "/order/create-order",
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
    createOrder
}