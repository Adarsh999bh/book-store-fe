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
const Cart = () => {
    let total = 0;
    let numberOfBooks = 0;
    const myBooks = useSelector((state) => state.products.cartProducts);
    if (myBooks.length == 0) {
        return <h2 style={{marginTop:"100px"}}> Oopsie.! You have not added anything in your cart.</h2>
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
                        <Button variant="contained">Place order</Button>
                    </Grid>
                </Grid>
                <CustomerAddress />
                <Grid
                    item
                    container
                    id="cartContainer"
                >
                    <Grid item xs={12}>
                        <Accordion elevation={0}>
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
                                    <Button variant="contained">checkout</Button>
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
};

export default Cart;