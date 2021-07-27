import {
    PRODUCTS_LIST_REQUEST,
    PRODUCTS_LIST_SUCCESS,
    PRODUCTS_LIST_FAIL,

} from '../constants/index'


// products list
export const productsListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCTS_LIST_REQUEST:
            return {
                ...state,
                loading: true,
                products: [],   // always pass the object during the request
                error: ""
            }
        case PRODUCTS_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
                error: ""
            }
        case PRODUCTS_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}