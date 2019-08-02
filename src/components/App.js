import React, { Component } from 'react'
import {
    BrowserRouter, Route, Switch
} from 'react-router-dom'

import Home from './Home';
import Navigation from './Navigation';
import Example from './Example';
import Register from './Register';
import DetailProduct from './DetailProduct';
import NotFound from './NotFound';
import Footer from './Footer';
import Eats from './Eats';
import Events from './Events';
import Flights from './Flights';
import Hotels from './Hotels';
import Login from './Login';
import Orders from './seller/Orders';
import Cart from './customer/Cart';
import SellerDashboard from './seller/SellerDashboard';
import Checkout from './paymentSystem/CheckOut';
import CustomerDashboard from './customer/CustomerDashboard';
import SellerStore from './SellerStore';

class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <Navigation/>
                    <div>
                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path="/register" component={Register}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/nav" component={Navigation}/>
                            <Route path="example" component={Example}/>
                            <Route path="/detailproduct" component={DetailProduct}/>
                            <Route path="/eats" component={Eats}/>
                            <Route path="/events" component={Events}/>
                            <Route path="/flights" component={Flights}/>
                            <Route path="/hotels" component={Hotels}/>
                            <Route path="/orders" component={Orders}/>
                            <Route path="/checkout" component={Checkout}/>
                            <Route path="/cart" component={Cart}/>
                            <Route path="/sellerdashboard" component={SellerDashboard}/>
                            <Route path="/customerdashboard" component={CustomerDashboard}/>
                            <Route path="/sellerstore" component={SellerStore}/>
                            
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                <Footer className="fixed-bottom"/>
            </BrowserRouter>
        )
    }
}
export default App