import React, { Component } from 'react'

const bgStyle = {
    width: '100%',
    height: '100%',
    backgroundImage: `url(https://images.unsplash.com/photo-1508766917616-d22f3f1eea14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)`,
    backgroundSize: 'cover',
    alignSelf: 'stretch'
}

class Eats extends Component{

    renderFoodType = () => {
        const foodType = [
            'Breakfast',
            'Lunch',
            'Dinner',
            'Delivery',
            'Bars and Nightlife',
            'Cafe and Deli',
            'Luxury Dining',
            'Desserts and Bakes'
        ]

        return foodType.map( item => {
            return (
                <div class="card m-1 col">
                    <div class="card-body">
                        <p className="card-text">
                            {item}
                        </p>
                    </div>
                </div>
            )
        })
    }

    render(){
        return(
            <div >
                <div className="container-fluid" style ={bgStyle}>
                    <div className="row">
                        <div className="card col-12 col-md-8 bg-transparent mx-auto mt-5 mb-5 align-self-center">
                            <div className="card-body mt-5 mb-5">
                                <h5 className="card-title text-white">It's a Whole New Food Affair</h5>
                                <p className="card-text text-white">
                                Explore and discover great places to eat near you
                                </p>
                                
                                <div className="input-group mb-3  align-self-center">
                                    <div className="input-group-prepend bg-white">
                                        <button className="btn " type="button" id="button-addon1">
                                            <i className="fas fa-search"></i>
                                        </button>
                                    </div>
                                    <input type="text" className="form-control mr-3" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                                    <button className=" ml-3 btn btn-success">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="m-4">
                    <div class="card">
                        <div class="card-body">
                            <div className="row">
                                {this.renderFoodType()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Eats