/* ************************************************************************
 * Execution        : 1. default node  cmd> node  index.js              
 * @descrition      : set up the react server 
 * @file            : server.js
 * @author          : Adarsh Bhandary
 * @version         : 1.0
 * @since           : 8-Dec-2021
 * 
 **************************************************************************/
import React, { useEffect} from "react";
import { Redirect } from "react-router-dom";
import Appbar from "../components/appbar";
import { Box } from "@mui/system";
import cartService from "../service/cartService";
import { setCartBooks } from "../actions/productActions";
import { useDispatch } from "react-redux";
import Cart from "../components/cart";

const CartPage = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  useEffect(() => {
    fetchitem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchitem = () => {
    cartService
      .getCart()
      .then((res) => {
        dispatch(setCartBooks(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (token == null) {
    return <>{<Redirect to="/login" />}</>;
  } else {
    return (
      <Box sx={{ display: "flex" }}>
        <Appbar />
        <Box component="main" className="book-container">
          <Cart></Cart>
        </Box>
      </Box>
    );
  }
};

export default CartPage;