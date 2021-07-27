import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CartPage from './components/CartPage'
import LoginPage from './components/LoginPage'
import NavBar from './components/Navbar'
import ProductsList from './components/ProductsList'
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";


const options = {
  timeout: 3000,
  offset: '80px',
};

const App = () => {
  return (
    <div>
      <Provider template={AlertTemplate} {...options}>
        <Router>
          <NavBar />
          <div className="container mt-4">
            <Switch>
              <Route path="/" component={ProductsList} exact />
              <Route path="/login" component={LoginPage} exact />
              <Route path="/cart" component={CartPage} exact />
            </Switch>
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
