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
            
            
            
            
            
            <Route component={NotFound}/>
            </Switch>
            </div>
            
            </BrowserRouter>
        )
    }
}
export default App