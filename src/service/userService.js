import AxiosHelper from "../helper/axios";
const url = require('../config/local')

const register = (data) => {
  let reqobj = {
    method: "post",
    url: url.baseURL+"/user/create",
    headers: {
      "Content-type": "application/json",
    },
    data: data,
  };
  return AxiosHelper.post(reqobj)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

const login = (data) => {
  let reqobj = {
    method: "post",
    url: url.baseURL+"/user/login",
    headers: {
      "Content-type": "application/json",
    },
    data: data,
  };
  return AxiosHelper.post(reqobj)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

const forgetPassword = (data) => {
  let reqobj = {
    method: "post",
    url: url.baseURL+"/user/forgotpass",
    headers: {
      "Content-type": "application/json",
    },
    data: data,
  };
  return AxiosHelper.post(reqobj)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

const resetPassword = (data,token) => {
  let reqobj = {
    method: "post",
    url: url.baseURL+"/user/reset/"+token,
    headers: {
      "Content-type": "application/json",
    },
    data: data,
  };
  console.log(reqobj.url);
  return AxiosHelper.post(reqobj)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { register, login, forgetPassword,resetPassword};