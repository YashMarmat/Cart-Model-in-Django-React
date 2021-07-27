import axios from 'axios'
import {

    CART_LIST_REQUEST,
    CART_LIST_SUCCESS,
    CART_LIST_FAIL,

    ADD_TO_CART_REQUEST,
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_FAIL,

    UPDATE_CART_ITEM_REQUEST,
    UPDATE_CART_ITEM_SUCCESS,
    UPDATE_CART_ITEM_FAIL,

    DELETE_CART_ITEM_REQUEST,
    DELETE_CART_ITEM_SUCCESS,
    DELETE_CART_ITEM_FAIL,

} from '../constants/index'


// cart list
export const getCartList = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: CART_LIST_REQUEST
        })

        // login reducer
        const {
            userLoginReducer: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        // api call
        const { data } = await axios.get(
            `http://localhost:8000/cart/${userInfo.id}/`,
            config
        )

        dispatch({
            type: CART_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CART_LIST_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        })
    }
}

// add to cart
export const addToCart = (cartItem) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ADD_TO_CART_REQUEST
        })

        // login reducer
        const {
            userLoginReducer: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        // api call
        const { data } = await axios.post(
            "http://localhost:8000/cart/add-in-cart/",
            {
                "id": cartItem.id,
                "title": cartItem.title,
                "price": cartItem.price,
                "user": userInfo.id
            },
            config
        )

        dispatch({
            type: ADD_TO_CART_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ADD_TO_CART_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        })
    }
}


// update cart item
export const updateCartItem = (id, quantity) => async (dispatch, getState) => {
    try {
        dispatch({
            type: UPDATE_CART_ITEM_REQUEST
        })

        // login reducer
        const {
            userLoginReducer: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        // api call
        const { data } = await axios.put(
            `http://localhost:8000/cart/update-item/${id}/`,
            { "quantity": quantity },
            config
        )

        dispatch({
            type: UPDATE_CART_ITEM_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: UPDATE_CART_ITEM_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        })
    }
}


// delete cart item
export const deleteCartItem = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: DELETE_CART_ITEM_REQUEST
        })

        // login reducer
        const {
            userLoginReducer: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        // api call
        const { data } = await axios.delete(
            `http://localhost:8000/cart/delete-item/${id}/`,
            config
        )

        dispatch({
            type: DELETE_CART_ITEM_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: DELETE_CART_ITEM_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        })
    }
}

