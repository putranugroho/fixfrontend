import React, { Component } from 'react'
import CarouselHome from './Carousel';
import ProductItem from './ProductItem';



class Home extends Component{
    render(){
        return(
            <div>
                <h1>Home Component</h1>
                <CarouselHome/>
                <ProductItem/>
            </div>
        )
    }
}
export default Home