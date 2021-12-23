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
import { Typography, Grid, IconButton, Divider, Button } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import "../styles/home.scss";
import cartService from "../service/cartService";
import { useDispatch } from "react-redux";
import { increaseProductQuantity, decreaseProductQuantity ,deleteBookFromCart} from "../actions/productActions";

const CartCard = ({ cart, item }) => {
    let count = item.quantity;
    const dispatch = useDispatch();

    const handleUpdate = (type) => {
        if (type == "increment") {
            cartService.addToCart({
                productId: item._id,
                quantity: 1,
                cartStatus: "open",
                isWishList: false
            }).then(res => {
                dispatch(increaseProductQuantity(item._id))
            }).catch(err => {
                console.log(err);
            })
        }
        else{
            cartService.deleteOne({productId:item._id}).then(res=>{
                dispatch(decreaseProductQuantity(item._id))
            }).catch(err=>{
                console.log(err);
            })
        }
    };

    const handleDelete = () => {
        cartService.deleteCart({productId:item._id}).then(res=>{
            dispatch(deleteBookFromCart(item._id));
        }).catch(err=>{
            console.log(err);
        })
    };

    return (
        <Grid item container padding={1}>
            <Grid item xs={4}>
                <img className="bookImage" src={item.image} alt="" />
            </Grid>
            <Grid item xs={8}>
                <div style={{ marginLeft: "10px" }}>
                    <Typography align="left">{item.productTitle}</Typography>
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
                        Rs {item.price}
                    </Typography>
                </div>

                {cart && (
                    <Typography
                        align="left"
                        style={{ marginTop: "5px", marginLeft: "0px" }}
                    >
                        <IconButton onClick={() => handleUpdate("decrement")}
                            disabled={count <= 1 ? true : false}
                        >
                            <RemoveCircleOutlineIcon />
                        </IconButton>
                        <button style={{ border: "1px solid black", width: "30px" }}>
                            {count}
                        </button>
                        <IconButton onClick={() => handleUpdate("increment")}>
                            <AddCircleOutlineIcon />
                        </IconButton>
                        <Button
                            onClick={handleDelete}
                            style={{ textTransform: "none", color: "black" }}
                        >
                            Remove
                        </Button>
                    </Typography>
                )}
            </Grid>
            <Grid item xs={12}>
                <Divider />
            </Grid>
        </Grid>
    );
};

export default CartCard;