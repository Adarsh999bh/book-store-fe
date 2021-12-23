/* ************************************************************************
 * Execution        : 1. default node  cmd> node  index.js              
 * @descrition      : set up the react server 
 * @file            : server.js
 * @author          : Adarsh Bhandary
 * @version         : 1.0
 * @since           : 8-Dec-2021
 * 
 **************************************************************************/
import { productReducer } from "./productReducer";
import { combineReducers } from "redux";
const reducers=combineReducers({
    products:productReducer,
});

export default reducers;