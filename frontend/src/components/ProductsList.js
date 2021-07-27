import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { getProductsList } from '../actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, getCartList } from '../actions/cartActions'
import { useAlert } from "react-alert";
import { ADD_TO_CART_RESET } from '../constants'


const ProductsList = () => {

    const alert = useAlert();
    let history = useHistory()
    const dispatch = useDispatch()


    const productsListReducer = useSelector(state => state.productsListReducer)
    const { loading, products, error } = productsListReducer

    const addToCartReducer = useSelector(state => state.addToCartReducer)
    const { success: addToCartSuccess, error: addToCartFail } = addToCartReducer

    // fetch products from backend
    useEffect(() => {
        dispatch(getProductsList())
        dispatch(getCartList())
    }, [dispatch])

    const addToCartHandler = (cartItem) => {
        dispatch(addToCart(cartItem))
    }

    if (addToCartSuccess) {
        alert.success("Item added to Cart.");
        dispatch({
            type: ADD_TO_CART_RESET
        })
    }
    
    if (addToCartFail) {
        alert.error(
            addToCartFail === "Cannot read property 'token' of null"
                ? "Please Login to continue"
                : addToCartFail
        );
        dispatch({
            type: ADD_TO_CART_RESET
        })
    }

    return (
        <div>
            <div className="text-info mb-2"><em>All Products</em></div>
            {loading ? <h4>Loading...</h4> : ""}
            {error ? <h4>{error}</h4> : ""}
            {products.map((each, idx) => (
                <div key={idx}>
                    <span
                        className="card p-2 mb-2"
                        style={{ width: "50%", border: "1px solid", borderColor: "#C6ACE7" }}
                    >
                        <p>{each.title}</p>
                        <p>${each.price}</p>
                        <button
                            className="btn btn-primary btn-sm"
                            onClick={() => addToCartHandler(each)}>
                            Add to cart
                        </button>
                    </span>
                </div>
            ))}
        </div>
    )
}

export default ProductsList
