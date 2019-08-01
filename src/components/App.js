import React, { Component } from 'react'
import {
    BrowserRouter, Route
} from 'react-router-dom'

import Home from './Home';
import Navbar from './Navbar'
import Navigation from './Navigation';
import ProductItem from './ProductItem';
import Register from './Register';

class App extends Component{
    render(){
        return(
            <BrowserRouter>
            <div>
            <Navbar/>

            <Route path="/" exact component={Home}/>
            <Route path="/register" component={Register}/>
            
            
            </div>
            
            </BrowserRouter>
        )
    }
}
export default App