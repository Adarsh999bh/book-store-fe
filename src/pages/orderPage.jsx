/* ************************************************************************
 * Execution        : 1. default node  cmd> node  index.js              
 * @descrition      : set up the react server 
 * @file            : server.js
 * @author          : Adarsh Bhandary
 * @version         : 1.0
 * @since           : 8-Dec-2021
 * 
 **************************************************************************/
import React from "react";
import { Redirect } from "react-router-dom";
import Appbar from "../components/appbar";
import { Box } from "@mui/system";
import Order from "../components/order";

const OrderPage = () => {
  const token = localStorage.getItem("token");
  if (token == null) {
    return <>{<Redirect to="/login" />}</>;
  } else {
    return (
      <Box id="orderPageBox">
        <Appbar />
        <Box component="main" className="book-container">
          <Order />
        </Box>
      </Box>
    );
  }
};

export default OrderPage;