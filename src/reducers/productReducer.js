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

const initialState = {
    allProducts: [],
    filteredProducts: [],
    cartProducts: [],
    sortIndex: 0,
    pageNumber: 1,
}

export const productReducer = (state = initialState, payload) => {
    switch (payload.type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, allProducts: payload.data }
        case ActionTypes.SET_FILTERED_PRODUCTS:
            return { ...state, filteredProducts: payload.data }
        case ActionTypes.SET_CART_PRODUCTS:
            return { ...state, cartProducts: payload.data }
        case ActionTypes.INCREASE_CART_ITEM_QUANTITY:
            let incrCart = [...state.cartProducts];
            incrCart = incrCart.map((item) => {
                if (item._id === payload.data) {
                    item.quantity += 1;
                }
                return item;
            })
            return { ...state, cartProducts: incrCart }
        case ActionTypes.DECREASE_CART_ITEM_QUANTITY:
            let decrCart = [...state.cartProducts];
            decrCart = decrCart.map((item) => {
                if (item._id === payload.data) {
                    item.quantity -= 1;
                }
                return item;
            })
            return { ...state, cartProducts: decrCart }

        case ActionTypes.DELETE_CART_PRODUCT:
            let filteredProducts = state.cartProducts.filter((item) => {
                return !(item._id == payload.data);
            })
            console.log(filteredProducts);
            return { ...state, cartProducts: filteredProducts }

        case ActionTypes.SET_SORT:
            return { ...state, sortIndex: payload.data }

        case ActionTypes.SET_PGNO:
            return { ...state, pageNumber: payload.data }

        default:
            return state;

    }
}