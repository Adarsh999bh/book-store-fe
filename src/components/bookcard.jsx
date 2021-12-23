/* ************************************************************************
 * Execution        : 1. default node  cmd> node  index.js              
 * @descrition      : set up the react server 
 * @file            : server.js
 * @author          : Adarsh Bhandary
 * @version         : 1.0
 * @since           : 8-Dec-2021
 * 
 **************************************************************************/
import React, { useState } from "react";
import {
  CardContent,
  Card,
  Typography,
  CardActions,
  Button,
  Grid,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import cartService from "../service/cartService";
const BookCard = ({ item }) => {
  const [wishlist, setWishlist] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState(false);
  const handleCart = () => {
    let data = {
      productId: item._id,
      quantity: 1,
      cartStatus:"open",
      isWishList:false
    };
    setWishlist(true);
    cartService
      .addToCart(data)
      .then((res) => {
          console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleWishlist = () => {
    setCart(true);
  };

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card sx={{ height: 345 }} onClick={() => setIsOpen(true)}>
        <div className="imageContainer">
          <img className="bookImage" src={item.image} alt="" />
        </div>
        <CardContent>
          <Typography align="left" className="item-content">
            {item.productTitle}
          </Typography>
          <Typography
            align="left"
            color="text.secondary"
            style={{ fontSize: "14px" }}
          >
            by {item.author}
          </Typography>
          <Typography
            align="left"
            style={{ fontWeight: "bold", fontSize: "14px" }}
          >
            Rs. {item.price}
          </Typography>
        </CardContent>
        <CardActions
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <Button
            onClick={handleCart}
            style={
              !cart && wishlist
                ? { background: "#3371B5", color: "white" }
                : !cart
                ? { backgroundColor: "#A03037", color: "white" }
                : { display: "none" }
            }
          >
            {!cart && wishlist ? "Added to bag" : "Add to bag"}
          </Button>
          <Button
            style={
              !wishlist
                ? { border: "1px solid black", color: "black" }
                : { display: "none" }
            }
            onClick={handleWishlist}
          >
            Wishlist
          </Button>
        </CardActions>
      </Card>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <DialogTitle>{item.title}</DialogTitle>
        <DialogContent>{item.description}</DialogContent>
      </Dialog>
    </Grid>
  );
};

export default BookCard;