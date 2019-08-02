import React, { Component } from 'react'
import {
    ListGroup, ListGroupItem, Badge 
} from 'reactstrap';
import Orders from './Orders';
import DashboardContent from './DashboardContent';



class SellerDashboard extends Component{

    state ={
        activePage : 0
    }

    sideBar = (step) => {
        switch (step) {
          case 0:
            return <DashboardContent/>;
          case 1:
            return <Orders/>;
          case 2:
            return ;
          default:
            throw new Error('Unknown step');
        }
      }
      
    renderSideMenu = () => {
        return(
            <div>
            <ListGroup>
                <ListGroupItem tag="a"  action onClick={() => this.setState({ activePage: this.setState.activePage = 0 })}>
                Dashboard
                </ListGroupItem>
                <ListGroupItem tag="a"  action onClick={() => this.setState({ activePage: this.setState.activePage = 1 })}>Orders</ListGroupItem>
                <ListGroupItem tag="a" href="#" action>Reports</ListGroupItem>
                <ListGroupItem tag="a" href="#" action>Store</ListGroupItem>
                <ListGroupItem disabled tag="a" href="#" action>Settings</ListGroupItem>
            </ListGroup>
            </div>
        )
    }

    render(){
        return(
            <div >
                <div className="row">
                    <div className="col-sm-2">
                    {this.renderSideMenu()}
                    </div>

                    <div className="col-sm-10"> 
                        {this.sideBar(this.state.activePage)}
                    </div>
                </div>
            </div>
        )
    }
}

export default SellerDashboard