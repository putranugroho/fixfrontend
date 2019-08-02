import React, {Component} from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class Orders extends Component{
    createTable = () => {
        let table = []
    
        // Outer loop to create parent
        for (let i = 0; i < 5; i++) {
          let children = []
          //Inner loop to create children

            children.push(
                <div className="card bg-white rounded m-3 shadow-lg" >
                    <div className="row">
                    <h5 className="card-title col margin-left">Boosted Board</h5>
                    
                    <h5 className="card-title col margin-right">Selesai</h5>

                    </div>
                    <div className="row">
                    <div className="col-sm-4">
                    <img  src="https://images-na.ssl-images-amazon.com/images/I/91Rj3gsmp5L._SL1500_.jpg" className="card-img-top" width="200px" length="200px" alt="Not Available"/>
                    </div>
                    <div className="col-sm-8">
                        <h5 className="card-title">Boosted Board</h5>
                        <h6 className="card-subtitle mb-2 text-muted">$ 1,999</h6>
                        <p className="card-text">Jakarta</p>
                        </div>
                        </div>
                    </div>
            )
          
          //Create the parent and add the children
          table.push(<div className="row">{children}</div>)
        }
        return table
      }

    render(){
        return(
            <div>
                <h1>Example1 Component</h1>

                <div className="container">
                    <div className="align-self-center">
                        <Pagination aria-label="Page navigation example" >
                            <PaginationItem>
                                <PaginationLink href="#">
                                haven't paid yet
                                </PaginationLink>
                            </PaginationItem>

                            <PaginationItem>
                                <PaginationLink href="#">
                                need to be sent
                                </PaginationLink>
                            </PaginationItem>

                            <PaginationItem>
                                <PaginationLink href="#">
                                sent
                                </PaginationLink>
                            </PaginationItem>

                            <PaginationItem>
                                <PaginationLink href="#">
                                Finished
                                </PaginationLink>
                            </PaginationItem>

                            <PaginationItem>
                                <PaginationLink href="#">
                                Return
                                </PaginationLink>
                            </PaginationItem>

                        </Pagination>
                    </div>
                    

                {this.createTable()}
                </div>

            </div>
        )
    }
}
export default Orders