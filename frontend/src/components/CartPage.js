import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCartItem, getCartList, updateCartItem } from '../actions/cartActions'
import { Card } from 'react-bootstrap'


function CartPage() {

    const dispatch = useDispatch()

    const cartListReducer = useSelector(state => state.cartListReducer)
    const { loading, items, error } = cartListReducer

    const updateCartItemReducer = useSelector(state => state.updateCartItemReducer)
    const { success: cartUpdationSuccess } = updateCartItemReducer

    const deleteCartItemReducer = useSelector(state => state.deleteCartItemReducer)
    const { success } = deleteCartItemReducer

    useEffect(() => {
        dispatch(getCartList())
    }, [dispatch, success, cartUpdationSuccess])

    // delete cart item
    const deleteCartItemHandler = (id) => {
        dispatch(deleteCartItem(id))
    }

    // update quantity handler
    const quantityUpdateHandler = (id, num) => {
        console.log("updates running")
        dispatch(updateCartItem(id, num))
    }

    return (
        <div>
            <div className="text-info mb-2"><em>My Cart</em></div>
            {items ? items.map((each, idx) => (

                <div key={idx}>

                    <Card
                        className="mb-2"
                        style={{ border: "1px solid", borderColor: "#C6ACE7" }}
                    >
                        <Card.Body>
                            <p><b>Title:</b> {each.title}</p>
                            <p><b>Price:</b> ${each.price}</p>
                            <p><b>Quantity:</b> {each.quantity}</p>
                            <p><b>Total Amount:</b> ${parseFloat(each.price * each.quantity).toFixed(2)}</p>
                        </Card.Body>
                        <Card.Footer>
                            {/* Delete Cart Item Condition */}
                            <span
                                title="delete from cart"
                                onClick={() => deleteCartItemHandler(each.id)}
                                className="mt-2 fas fa-trash-alt fa-lg delete-button-css"
                            >
                            </span>
                            {/* Edit Cart Item Quantity Condition */}
                            {" "}<b>Change Quantity: </b>
                            <select
                                className="form-class"
                                defaultValue={each.quantity}
                                onChange={e => {                                    
                                    quantityUpdateHandler(each.id, e.target.value)
                                }}
                            >
                                {[...Array(10)].map((each, i) =>
                                    <option key={i}>
                                        {i + 1}
                                    </option>
                                )}
                            </select>
                        </Card.Footer>
                    </Card>
                </div>
            )) : "Cart is Empty"
            }
        </div >
    )
}

export default CartPage
