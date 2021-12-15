import React from "react";
import { Redirect } from "react-router-dom";
import Appbar from "../components/appbar";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import productService from "../service/productService";
import { useEffect } from "react";
import Book from "../components/book";
import { setBooks } from "../actions/productActions";
const Dashboard = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  useEffect(() => {
    fetchitem();
  }, []);

  const fetchitem = () => {
    productService
      .getBooks(1)
      .then((res) => {
        dispatch(setBooks(res.data));
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
          <Book/>
        </Box>
      </Box>
    );
  }
};

export default Dashboard;