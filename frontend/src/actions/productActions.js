import axios from 'axios'
import {

    PRODUCTS_LIST_REQUEST,
    PRODUCTS_LIST_SUCCESS,
    PRODUCTS_LIST_FAIL,

} from '../constants/index'


// get products list
export const getProductsList = () => async (dispatch) => {
    try {
        
        dispatch({
            type: PRODUCTS_LIST_REQUEST
        })

        // api call
        const {data} = await axios.get("http://127.0.0.1:8000/products/")

        dispatch({
            type: PRODUCTS_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCTS_LIST_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        })
    }
}