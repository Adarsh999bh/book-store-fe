import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import "../styles/home.scss";
import { useSelector } from "react-redux";
import { setFilteredBooks, setSort } from "../actions/productActions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import productService from "../service/productService";

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  backgroundColor: "#A03037",
}));

const Appbar = () => {
  const myBooks = useSelector((state) => state.products.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilteredBooks(myBooks));
  }, [myBooks]);

  const handleSearch = (searchValue) => {
    if (searchValue.length >= 3) {
      dispatch(setSort(0))
      productService
        .searchBook({ searchTxt: searchValue })
        .then((res) => {
          dispatch(setFilteredBooks(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      dispatch(setFilteredBooks(myBooks));
    }
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          style={{ marginLeft: "5%" }}
          component={Link}
          to="/Dashboard"
        >
          <ImportContactsIcon fontSize="large" style={{ color: "white" }} />
        </IconButton>
        <Typography variant="h6" id="book-title">
          BookStore
        </Typography>
        <div id="searchDiv">
          <SearchIcon id="search-icon" />
          <input
            type="text"
            placeholder="Search…"
            id="search-bar"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <Typography variant="h6" id="cart-title">
          Cart
        </Typography>
        <IconButton
          style={{ color: "white", marginRight: "6%" }}
          component={Link}
          to="/cart"
        >
          <ShoppingCartIcon fontSize="large" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;