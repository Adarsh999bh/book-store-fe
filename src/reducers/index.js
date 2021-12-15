import { productReducer } from "./productReducer";
import { combineReducers } from "redux";
const reducers=combineReducers({
    products:productReducer,
});

export default reducers;