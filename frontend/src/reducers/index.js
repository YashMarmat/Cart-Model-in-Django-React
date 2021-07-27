import { combineReducers } from "redux";
import { cartListReducer, addToCartReducer, deleteCartItemReducer, updateCartItemReducer } from "./cartReducers";
import { productsListReducer } from "./productReducers";
import { userLoginReducer } from "./userReducers";


const allReducers = combineReducers({
    productsListReducer,
    cartListReducer,
    addToCartReducer,
    updateCartItemReducer,
    deleteCartItemReducer,
    userLoginReducer,
})

export default allReducers