import {
    ADD_TO_CART_REQUEST,
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_FAIL,
    ADD_TO_CART_RESET,

    CART_LIST_REQUEST,
    CART_LIST_SUCCESS,
    CART_LIST_FAIL,
    CART_LIST_RESET,

    UPDATE_CART_ITEM_REQUEST,
    UPDATE_CART_ITEM_SUCCESS,
    UPDATE_CART_ITEM_FAIL,
    UPDATE_CART_ITEM_RESET,

    DELETE_CART_ITEM_REQUEST,
    DELETE_CART_ITEM_SUCCESS,
    DELETE_CART_ITEM_FAIL,
    DELETE_CART_ITEM_RESET,

} from '../constants/index'


// cart list reducer
export const cartListReducer = (state = { items: [] }, action) => {
    switch (action.type) {
        case CART_LIST_REQUEST:
            return {
                ...state,
                loading: true,
                items: [],
                success: false,
                error: ""
            }
        case CART_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload,
                success: true,
                error: ""
            }
        case CART_LIST_FAIL:
            return {
                ...state,
                loading: false,
                items: [],
                success: false,
                error: action.payload
            }
        case CART_LIST_RESET:
            return {
                ...state,
                loading: false,
                items: [],
                success: false,
                error: ""
            }
        default:
            return state
    }
}

// add items in cart
export const addToCartReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case ADD_TO_CART_REQUEST:
            return {
                ...state,
                loading: true,
                product: {},
                success: false,
                error: ""
            }
        case ADD_TO_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                product: action.payload,
                error: ""
            }
        case ADD_TO_CART_FAIL:
            return {
                ...state,
                loading: false,
                success: false,
                product: {},
                error: action.payload
            }
        case ADD_TO_CART_RESET:
            return {
                ...state,
                loading: false,
                success: false,
                product: {},
                error: ""
            }
        default:
            return state
    }
}

// update items in cart
export const updateCartItemReducer = (state = { item: {} }, action) => {
    switch (action.type) {
        case UPDATE_CART_ITEM_REQUEST:
            return {
                ...state,
                loading: true,
                item: {},
                success: false,
                error: ""
            }
        case UPDATE_CART_ITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                item: action.payload,
                error: ""
            }
        case UPDATE_CART_ITEM_FAIL:
            return {
                ...state,
                loading: false,
                success: false,
                item: {},
                error: action.payload
            }
        case UPDATE_CART_ITEM_RESET:
            return {
                ...state,
                loading: false,
                success: false,
                item: {},
                error: ""
            }
        default:
            return state
    }
}


// delete cart item reducer
export const deleteCartItemReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_CART_ITEM_REQUEST:
            return {
                ...state,
                loading: true,
                success: false,
                error: ""
            }
        case DELETE_CART_ITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                error: ""
            }
        case DELETE_CART_ITEM_FAIL:
            return {
                ...state,
                loading: false,
                success: false,
                error: action.payload
            }
        case DELETE_CART_ITEM_RESET:
            return {
                ...state,
                loading: false,
                success: false,
                error: ""
            }
        default:
            return state
    }
}