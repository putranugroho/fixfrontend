import React, { Component } from 'react'
import {
    BrowserRouter, Route
} from 'react-router-dom'

import Home from './Home';
import Navigation from './Navigation';
import Example from './Example';
import Register from './Register';

class App extends Component{
    render(){
        return(
            <BrowserRouter>
            <div>


            <Route path="/" exact component={Home}/>
            <Route path="/register" component={Register}/>
            <Route path="/nav" component={Navigation}/>
            <Route path="example" component={Example}/>
            
            </div>
            
            </BrowserRouter>
        )
    }
}
export default App