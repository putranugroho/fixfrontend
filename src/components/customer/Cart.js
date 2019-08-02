import React, {Component} from "react"
import { Link } from 'react-router-dom'

import ProductItem from '../ProductItem';

class Cart extends Component{

    orderSummary = () => {
        return(
            <div className="card  bg-white rounded shadow-lg">
                <div className="card-body">
                    <div className="card-title">
                        <h5 >Order Summary</h5>
                    </div>
                    <div className="row">
                        <td className="col">Total Harga</td>
                        <td className="col">$ 1,999</td>
                    </div>
                    <Link to="/checkout">
                    <div className="d-flex justify-content-center my-3">
                            <button type="submit" className="btn btn-success btn-block">
                                Buy
                            </button>
                            </div>    
                            </Link>
                </div>  
            </div>       
        )
    }

    renderCart = () => {
        return(
            <div className="card bg-white rounded m-2" >
      <div className="row  ">
      <div className="col-2">
      <img src="https://images-na.ssl-images-amazon.com/images/I/91Rj3gsmp5L._SL1500_.jpg"  className="" width="65px" alt="not available"></img>
      </div>
      
      <div className="col-6">
      Boosted board<br/>
      Electric SkateBoard<br/>
      $1,999
      </div>

      <div className="col-2">
        <button className="btn btn-outline-success btn-sm" >
          WishList
        </button>

        <button className="btn btn-outline-danger btn-sm" >
          Delete
        </button>
      </div>

      <div className="col-2">
      <div className="row">
      <div className="col">
          <button className="btn btn-outline-success" type="submit">-</button>
      </div>

      <div className="form-group col">
          <input type="number" value="1"/>
      </div>

      <div className="col">
          <button className="btn btn-outline-success" type="submit">+</button>
      </div>
      </div>
      </div>

      </div>
      </div>
        )
    }

    render() {
        return(
            <div>
            <div className="container">
                <div className="row">
                    
                    <div className="col-8">
                    {this.renderCart()}
                    </div>

                    <div className="col-4">
                        {this.orderSummary()}
                    </div>

                </div>
                </div>
                
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
            </div>
        )
    }
}
export default Cart



