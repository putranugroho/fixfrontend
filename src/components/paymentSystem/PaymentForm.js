import React,{Component} from 'react';


class PaymentForm extends Component {
    render(){
  return (
    <React.Fragment>
    <h1 className="card-title" >
        Payment method
      </h1>

      <div className="card-body">
      <div className="row"> 
      <div className="form-group col">
      <label for="cardName">Card Name</label>
        <input className="form-control"  id="cardName" placeholder="Name on card" />
        </div>

        <div className="form-group col">
        <label for="cardNumber">Card Number</label>
        <input className="form-control"  id="cardNumber" placeholder="Card number" />
        </div>
        </div>  

        <div className="row">
        <div className="form-group col">
        <label for="expDate">Expirate Date</label>
          <input className="form-control"  id="expDate" placeholder="Expiry date" />
        </div>

        <div className="form-group col">
        <label for="expDate">Card Number</label>
          <input className="form-control"
            id="cvv"
            placeholder="CVV"
            
          /> Last three digits on signature strip
        </div>
        </div>

        <div className="form-group">
          <input 
            type="checkbox"
          /> Remember credit card details for next time
        </div>
      </div>
    </React.Fragment>
  );
}}
export default PaymentForm