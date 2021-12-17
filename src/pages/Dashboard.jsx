import React from "react";
import { Redirect } from "react-router-dom";
import Appbar from "../components/appbar";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import productService from "../service/productService";
import { useEffect } from "react";
import Book from "../components/book";
import {setFilteredBooks,setBooks } from "../actions/productActions";
import { useSelector } from "react-redux";
const Dashboard = () => {
  const sortIndex=useSelector((state) => state.products.sortIndex);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  useEffect(() => {
    fetchitem();
  }, []);

  const fetchitem = () => {
    productService
      .getBooks(1,sortIndex)
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