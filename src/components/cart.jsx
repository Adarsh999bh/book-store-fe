/* ************************************************************************
 * Execution        : 1. default node  cmd> node  index.js              
 * @descrition      : set up the react server 
 * @file            : server.js
 * @author          : Adarsh Bhandary
 * @version         : 1.0
 * @since           : 8-Dec-2021
 * 
 **************************************************************************/
import {
    Button,
    Grid,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import { useSelector } from "react-redux";
import CartCard from "./cartCard";
import CustomerAddress from "./customerAddress";
import orderService from "../service/orderService";
import cartService from "../service/cartService";
import { Redirect } from "react-router-dom";
import { useState } from "react";
const Cart = () => {
    let total = 0;
    let numberOfBooks = 0;
    const [success, setSuccess] = useState(false);
    const [expanded, setExpanded] = React.useState(false);
    const [expandedSummary, setExpandedSummary] = React.useState(false);
    const myBooks = useSelector((state) => state.products.cartProducts);
    const handleExpanded = () => {
        setExpanded((prev) => !prev);
    };

    const handleExpandedSummary = () => {
        setExpandedSummary((prev) => !prev);
    };

    const handleCheckout = () => {
        let data = {
            productList: [myBooks.map((item) => item._id)],
            totalPrice: total,
        };
        orderService
            .createOrder(data)
            .then((res) => {
                if (res.data) {
                    sessionStorage.setItem("orderId", res.data.orderId);
                    myBooks.map(item => {
                        cartService.deleteCart({ productId: item._id }).then(resp => {
                            //nothing here
                        }).catch(err => {
                            console.log(err);
                        })
                    })
                    setSuccess(true);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    if (myBooks.length == 0) {
        return <h2 style={{ marginTop: "100px" }}> Oopsie.! You have not added anything in your cart.</h2>
    }
    else {
        return (
            <Grid container>
                <Grid
                    item
                    container
                    id="cartContainer"
                >
                    <Grid item xs={4}>
                        <Typography style={{ marginBottom: "15px", fontSize: "20px" }}>
                            My Cart({myBooks.length})
                        </Typography>
                    </Grid>
                    <Grid item xs={8} />
                    {myBooks.map((item, index) => {
                        return <CartCard cart={true} item={item} key={index} />;
                    })}

                    <Grid item xs={12} align="right">
                        <Button variant="contained" onClick={handleExpanded} style={{ backgroundColor: "#A03037", color: "white" }}>Place order</Button>
                    </Grid>
                </Grid>
                <CustomerAddress
                    expanded={expanded}
                    handleExpanded={handleExpanded}
                    handleExpandedSummary={handleExpandedSummary}
                />
                <Grid
                    item
                    container
                    id="cartContainer"
                >
                    <Grid item xs={12}>
                        <Accordion elevation={0}
                            expanded={expandedSummary}
                            onChange={handleExpandedSummary}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Order Summary</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {myBooks.map((item, index) => {
                                    total += item.price * item.quantity;
                                    numberOfBooks += item.quantity;
                                    return <CartCard item={item} key={index} />;
                                })}

                                <Grid item xs={11} align="left" style={{ marginLeft: "35%" }}>
                                    <Typography>Number of books : {numberOfBooks}</Typography>
                                    <Typography>Total Price : {total}</Typography>
                                </Grid>
                                <Grid item xs={12} align="right">
                                    <Button variant="contained" onClick={handleCheckout} style={{ backgroundColor: "#A03037", color: "white" }}>checkout</Button>
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                </Grid>
                {success && <Redirect to="/order" />}
            </Grid>
        );
    }
};

export default Cart;