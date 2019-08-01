import React, { Component } from 'react'
import { 
    Pagination, PaginationItem, PaginationLink 
} from 'reactstrap';

class DetailProduct extends Component{

    state = {
        activeTabs: 0,
        amount: 0
    }

    increaseAmount = (props) => {
        this.setState({
            amount: this.state.amount+1
        })
    }

    decreaseAmount = (props) => {
        if(this.state.amount>0){
        this.setState({
            amount: this.state.amount-1
        })
    }
    }

    detailControl = (step) => {
        switch (step) {
          case 0:
            return this.productInformation();
          case 1:
            return this.productReview();
          case 2:
            return this.productForums();
          default:
            throw new Error('Unknown step');
        }
    }

    productInformation = () => {
        return(
            <div className="card p-3">
                <div className="card-body m-3"></div>
                    <p class="card-text"> 
                        Range: Go up to 14 miles with the extended range battery<br/>
                        Speed: Get there faster with a 22 mph top speed<br/>
                        Hill Climbing: Climb a 25% grade hill without breaking a sweat<br/>
                        Ride Modes: 4 ride modes, from Beginner to Expert<br/>
                        Wheels: Boosted Stratus 85mm wheels deliver the highest roll speed of any Boosted board to date <br/>
                    </p>
            </div>
        )
    }

    productReview = () => {
        return(
            <div className="container-fluid">

                <div className="row d-flex flex-column">
                    <div className="card bg-white rounded m-3 p-3 shadow-lg" >
                            <h5 className="card-title">User 1</h5>
                            <h6 className="card-subtitle mb-2 text-muted">
                            Great Product! 1
                            </h6>
                    </div>
                </div>

                <div className="row d-flex flex-column">
                    <div className="card bg-white rounded m-3 p-3 shadow-lg" >
                            <h5 className="card-title">User 2</h5>
                            <h6 className="card-subtitle mb-2 text-muted">
                            Great Product! 2
                            </h6>
                    </div>
                </div>

                <div className="row d-flex flex-column">
                    <div className="card bg-white rounded m-3 p-3 shadow-lg" >
                            <h5 className="card-title">User 3</h5>
                            <h6 className="card-subtitle mb-2 text-muted">
                            Great Product! 3
                            </h6>
                    </div>
                </div>

                <div className="row d-flex flex-column">
                    <div className="card bg-white rounded m-3 p-3 shadow-lg" >
                            <h5 className="card-title">User 4</h5>
                            <h6 className="card-subtitle mb-2 text-muted">
                            Great Product! 4
                            </h6>
                    </div>
                </div>

                <div className="row d-flex flex-column">
                    <div className="card bg-white rounded m-3 p-3 shadow-lg" >
                            <h5 className="card-title">User 5</h5>
                            <h6 className="card-subtitle mb-2 text-muted">
                            Great Product! 5
                            </h6>
                    </div>
                </div>

            </div>
        )
    }



    productForums = () => {
        return(
            <div className="container-fluid">

                <div className="row d-flex flex-column">
                    <div className="card bg-white rounded m-3 p-3 shadow-lg" >
                        <div className="row">
                            <div className="col-8">
                                <h5 className="card-title">Any Question ?</h5>
                                <h6 className="card-subtitle mb-2 text-muted">
                                Discuss with sellers or other users
                                </h6>
                            </div>
                        

                            <div className="col-4">
                                <button className="m-2 btn btn-success">
                                    Write a Question
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row d-flex flex-column">
                    <div className="card bg-white rounded m-3 p-3 shadow-lg" >
                            <h5 className="card-title">User 1</h5>
                            <h6 className="card-subtitle mb-2 text-muted">
                            I Have 1 Question for Seller
                            </h6>
                    </div>
                </div>

                <div className="row d-flex flex-column">
                    <div className="card bg-white rounded m-3 p-3 shadow-lg" >
                            <h5 className="card-title">User 2</h5>
                            <h6 className="card-subtitle mb-2 text-muted">
                            I Have 2 Question for Seller
                            </h6>
                    </div>
                </div>

                <div className="row d-flex flex-column">
                    <div className="card bg-white rounded m-3 p-3 shadow-lg" >
                            <h5 className="card-title">User 3</h5>
                            <h6 className="card-subtitle mb-2 text-muted">
                            I Have 3 Question for Seller
                            </h6>
                    </div>
                </div>

                <div className="row d-flex flex-column">
                    <div className="card bg-white rounded m-3 p-3 shadow-lg" >
                            <h5 className="card-title">User 4</h5>
                            <h6 className="card-subtitle mb-2 text-muted">
                            I Have 4 Question for Seller
                            </h6>
                    </div>
                </div>

                <div className="row d-flex flex-column">
                    <div className="card bg-white rounded m-3 p-3 shadow-lg" >
                            <h5 className="card-title">User 5</h5>
                            <h6 className="card-subtitle mb-2 text-muted">
                            I Have 5 Question for Seller
                            </h6>
                    </div>
                </div>

            </div>
                
            
        )
    }

lowerPage = () => {
    return(
        <Pagination aria-label="Page navigation example">
            <PaginationItem >
                <PaginationLink onClick={() => this.setState({ activeTabs: this.setState.activeTabs = 0 })}>
                Product Information
                </PaginationLink>
            </PaginationItem>
            
            <PaginationItem>
                <PaginationLink onClick={() => this.setState({ activeTabs: this.setState.activeTabs = 1 })}>
                Review
                </PaginationLink>
            </PaginationItem>

            <PaginationItem>
                <PaginationLink onClick={() => this.setState({ activeTabs: this.setState.activeTabs = 2 })}>
                Talk About It
                </PaginationLink>
            </PaginationItem>

        </Pagination>
    )
}

    render(){
        return(

            
            <div className="container-fluid">
                <h1>Detail Product Component</h1>
                    <div className="card bg-white rounded m-3">
                        <div className="row">
                            <div className=" col-sm-4">
                                <img  src="https://images-na.ssl-images-amazon.com/images/I/91Rj3gsmp5L._SL1500_.jpg" className="card-img-left mt-6 border border-secondary" width="200px" length="200px" alt="Not Available"/>
                            </div>

                            <div className="card-body col-sm-8">
                                <h5 className="card-title">Boosted Board</h5>
                                <h6 className="card-subtitle mb-2 text-muted">$ 1,999</h6>
                                
                                <p className="card-text">Jakarta</p>

                                <div className="row">
                                    <div className="col">
                                        <button className="btn btn-outline-success" type="submit"onClick={this.decreaseAmount}>-</button>
                                    </div>

                                    <div className="form-group col">
                                        <input type="number" min='1'  value={this.state.amount}/>
                                    </div>

                                    <div className="col">
                                        <button className="btn btn-outline-success" type="submit"onClick={this.increaseAmount}>+</button>
                                    </div>

                                    <div className="form-group col">
                                        <input type="text" placeholder="Notes for Seller" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                    {this.lowerPage()}
                    </div>
                    <div >
                    {this.detailControl(this.state.activeTabs)}
                    </div>
            </div>
        )
    }
}
export default DetailProduct