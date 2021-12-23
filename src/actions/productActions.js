/* ************************************************************************
 * Execution        : 1. default node  cmd> node  index.js              
 * @descrition      : set up the react server 
 * @file            : server.js
 * @author          : Adarsh Bhandary
 * @version         : 1.0
 * @since           : 8-Dec-2021
 * 
 **************************************************************************/
import { ActionTypes } from "../constants/actionTypes";

export const setBooks = (Books) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        data: Books,
    };
};

export const setFilteredBooks = (Books) => {
    return {
        type: ActionTypes.SET_FILTERED_PRODUCTS,
        data: Books,
    };
};

export const setCartBooks = (Books) => {
    return {
        type: ActionTypes.SET_CART_PRODUCTS,
        data: Books,
    };
};

export const deleteBookFromCart = (productId) => {
    return {
        type: ActionTypes.DELETE_CART_PRODUCT,
        data: productId,
    };
};

export const increaseProductQuantity = (productId) => {
    return {
        type: ActionTypes.INCREASE_CART_ITEM_QUANTITY,
        data: productId,
    };
};
export const decreaseProductQuantity = (productId) => {
    return {
        type: ActionTypes.DECREASE_CART_ITEM_QUANTITY,
        data: productId,
    };
};

export const setSort = (sortIndex) => {
    return {
        type: ActionTypes.SET_SORT,
        data: sortIndex,
    };
};
export const setPgno = (pgNo) => {
    return {
        type: ActionTypes.SET_PGNO,
        data: pgNo,
    };
};