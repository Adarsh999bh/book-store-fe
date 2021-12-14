// import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  Toolbar,
  Typography,
  IconButton,
  TextField,
  InputAdornment,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import "../styles/home.scss";
// import { useSelector } from "react-redux";
// import { setFilteredBooks } from "../actions/bookActions";
// import { useDispatch } from "react-redux";
import {Link} from 'react-router-dom'

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  backgroundColor: "#A03037",
}));

const Appbar = () => {
//   const [search, setSearch] = useState("");
//   const myBooks = useSelector((state) => state.allBooks.books);
//   const dispatch = useDispatch();
//   const handleSearch = (searchValue) => {
//     setSearch(searchValue);
//   };

//   useEffect(() => {
//     dispatch(
//       setFilteredBooks(
//         myBooks.filter((item) => {
//           return (
//             item.title.toLowerCase().includes(search.toLowerCase()) ||
//             item.author.toLowerCase().includes(search.toLowerCase())
//           );
//         })
//       )
//     );
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [search, myBooks]);

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton style={{ marginLeft: "5%" }} component={Link} to="/Dashboard">
          <ImportContactsIcon fontSize="large" style={{ color: "white" }} />
        </IconButton>
        <Typography variant="h6" id="book-title">
          BookStore
        </Typography>
        <TextField
          placeholder="Search…"
          id="search-bar"
          variant="outlined"
        //   onChange={(e) => handleSearch(e.target.value)}
          style={{ margin: "0px 25% 0px 5%" }}
          size="small"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <SearchIcon id="search-icon" />
                </IconButton>
              </InputAdornment>
            ),
            style: { height: "40px", backgroundColor: "white" },
          }}
        />
        <Typography variant="h6" id="cart-title">
          Cart
        </Typography>
        <IconButton style={{ color: "white", marginRight: "6%" }} component={Link} to="/cart">
          <ShoppingCartIcon fontSize="large" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;