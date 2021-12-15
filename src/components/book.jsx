import {
    Grid,
    Box,
    Typography,
    Button,
    Menu,
    MenuItem,
    Pagination,
  } from "@mui/material";
  import React from "react";
  import { useSelector } from "react-redux";
  import { useDispatch } from "react-redux";
  import productService from "../service/productService";
  import { setBooks } from "../actions/productActions";
  import BookCard from "./bookcard";
  import styled from "@emotion/styled";
  
  const Paginations = styled(Pagination)(({ theme }) => ({
    color: "#A03037",
  }));
  
  const Book = () => {
    const myBooks = useSelector((state) => state.products.filteredProducts);

    const numberOfBooks = myBooks.length;
  
    const dispatch = useDispatch();
  
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const handlePagination = (index) => {
    productService
        .getBooks(index)
        .then((res) => {
          console.log(res.data);
          dispatch(setBooks(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  
    const handleDisplayOrder = (order) => {
      if (order === "low") {
        myBooks.sort((a, b) => a.price - b.price);
        handleClose();
      } else {
        myBooks.sort((a, b) => b.price - a.price);
        handleClose();
      }
    };
  
    return (
      <Box className="main-container">
        <Grid container>
          <Grid item xs={6} align="left">
            <Typography id="book-count">
              Books
              <span id="book-count-span">({numberOfBooks} items)</span>
            </Typography>
          </Grid>
          <Grid item xs={6} align="right">
            <Button
              id="sort-by-btn"
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              Sort by price
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={() => handleDisplayOrder("low")}>
                price: low to high
              </MenuItem>
              <MenuItem onClick={() => handleDisplayOrder("high")}>
                price: high to low
              </MenuItem>
            </Menu>
          </Grid>
        </Grid>
  
        <Grid container spacing={4}>
          {myBooks.map((item, index) => {
            return <BookCard item={item} key={index} />;
          })}
        </Grid>
  
        <div id="pagination">
          <Paginations
            count={5}
            shape="rounded"
            color="primary"
            onChange={(event, page) => handlePagination(page)}
          />
        </div>
      </Box>
    );
  };
  
  export default Book;