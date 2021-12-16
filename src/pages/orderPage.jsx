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