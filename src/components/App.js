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
import Food from './Food';
import Event from './Event';

class App extends Component{
    render(){
        return(
            <BrowserRouter>
            <div>
            <Navigation/>
            <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/register" component={Register}/>
            <Route path="/nav" component={Navigation}/>
            <Route path="example" component={Example}/>
            <Route path="/detailproduct" component={DetailProduct}/>
            <Route path="/food" component={Food}/>
            <Route path="/event" component={Event}/>
            
            
            
            
            <Route component={NotFound}/>
            </Switch>
            </div>
            
            <Footer className="fixed-bottom"/>
            </BrowserRouter>
        )
    }
}
export default App