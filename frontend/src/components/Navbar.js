import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userActions'
import { useHistory } from "react-router-dom";
import { getCartList } from '../actions/cartActions'


function NavBar() {

    let history = useHistory()
    const dispatch = useDispatch()

    // login reducer
    const userLoginReducer = useSelector(state => state.userLoginReducer)
    const { userInfo } = userLoginReducer

    // cart list reducer
    const cartListReducer = useSelector(state => state.cartListReducer)
    const { loading, items, error } = cartListReducer

    // cart list reducer
    const addToCartReducer = useSelector(state => state.addToCartReducer)
    const { success } = addToCartReducer

    useEffect(() => {
        dispatch(getCartList())
    }, [dispatch, success])


    // logout
    const logoutHandler = () => {
        dispatch(logout()) // action
        history.push("/login")
        window.location.reload()
    }

    // cart quantity handler
    const quantityHandler = () => {
        let myNum = 0
        for (let i = 0; i < items.length; i++) {
            let totalQuantity = items[i].quantity
            myNum = myNum + totalQuantity
        }
        return myNum
    }

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand><i className="mb-2 fas fa-home"> Home</i></Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">

                            {/* All Products */}
                            <LinkContainer to="/">
                                <Nav.Link >All Products</Nav.Link>
                            </LinkContainer>

                        </Nav>


                        {/* Cart */}
                        <LinkContainer to="/cart/" style={{ "color": "grey" }}>
                            <Nav.Link><i
                                title="my cart"
                                className="fas fa-cart-arrow-down fa-lg"
                            >
                            </i>{" "}
                                {quantityHandler() === 0 ? "" :
                                    <span
                                        className="cart-css text-center text-light"
                                    >{quantityHandler()}</span>
                                }
                            </Nav.Link>
                        </LinkContainer>

                        {/* login-logout condition here */}

                        {userInfo ?
                            <div>
                                <NavDropdown className="navbar-nav text-capitalize" title={userInfo.username} id='username'>
                                    <NavDropdown.Item onClick={logoutHandler}>
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </div>
                            :

                            <LinkContainer to="/login">
                                <Nav.Link><i className="fas fa-user"></i> Login</Nav.Link>
                            </LinkContainer>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default NavBar
