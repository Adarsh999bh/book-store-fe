/* ************************************************************************
 * Execution        : 1. default node  cmd> node  index.js              
 * @descrition      : set up the react server 
 * @file            : server.js
 * @author          : Adarsh Bhandary
 * @version         : 1.0
 * @since           : 8-Dec-2021
 * 
 **************************************************************************/
import { Button, Grid } from "@mui/material";
import React, { useEffect } from "react";
import orderImage from "../assets/order.svg";
import { Link } from "react-router-dom";

const Order = () => {

  const orderID = sessionStorage.getItem("orderId");
  useEffect(() => {
    return () => {
      sessionStorage.removeItem("orderId");
    };
  }, []);

  return (
    <Grid container>
      <Grid item xs={12} mt={2}>
        <div className="image">
          <img alt="" src={orderImage} style={{ height: "190px" }} />
          <div className="centered">
            <h2>Order placed successfully</h2>
          </div>
        </div>
      </Grid>
      <Grid item xs={12}>
        <p style={{ margin: "0px" }}>hurray!!! your order is confirmed</p>
        <p style={{ margin: "0px" }}>
          the order id is #{orderID} save the order id for
        </p>
        <p style={{ margin: "0px" }}>further communication..</p>
      </Grid>
      <Grid item xs={12}>
        <table border="1" cellPadding="15" cellSpacing="0" align="center">
          <tbody>
            <tr>
              <th>Email us</th>
              <th>Contact us</th>
              <th>Address</th>
            </tr>
            <tr>
              <td>admin@bookstore.com</td>
              <td>8163475881</td>
              <td>
                42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex, near
                Kumarakom restaurant, HSR Layout, Bangalore 560034
              </td>
            </tr>
          </tbody>
        </table>
      </Grid>
      <Grid item xs={12} style={{ margin: "20px auto" }}>
        <Button
          style={{ backgroundColor: "#A03037", color: "white" }}
          component={Link}
          to="/dashboard"
        >
          Continue Shopping
        </Button>
      </Grid>
    </Grid>
  );
};

export default Order;