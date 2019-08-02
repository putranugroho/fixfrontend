import React, {Component} from 'react';



const products = [
  { name: 'Anjay 1', desc: 'Sub-Anjay 1', price: '$9.99' },
  { name: 'Anjay 2', desc: 'Sub-Anjay 2', price: '$3.45' },
  { name: 'Anjay 3', desc: 'Sub-Anjay 3', price: '$6.51' },
  { name: 'Anjay 4', desc: 'Sub-Anjay 4', price: '$14.11' },
  { name: 'Shipping', desc: '', price: 'Free' },
];
const addresses = ['1 Anjay Road', 'Anjayville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visanjay' },
  { name: 'Card holder', detail: 'Mr Anjay' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

class ReviewOrder extends Component {
  render(){

  return (
    <React.Fragment>
    <h1 className="card-title" >
        Order summary
      </h1>

      <table >
        {products.map(product => (

          <div className="row">
          <tbody >
            <thead>{product.name}{product.desc} </thead> 
            
            <td> {product.price}</td>
            </tbody>
            </div>

        ))}

        <tbody >

          <thead>Total</thead>
          <td variant="subtitle1">
            $34.06
          </td>

        </tbody>

      </table>
      <div className="card-body row">
        <div className="form-group col">
          <h6  >
            Shipping
          </h6>
          <p>John Smith</p>
          <p>{addresses.join(', ')}</p>
        </div>

        <div className="form-group col">
          <h1 >
            Payment details
          </h1>

          <div >
            {payments.map(payment => (
              <React.Fragment key={payment.name}>
                <div className="row">
                <tbody className="col">
                  <tr >{payment.name}</tr>
                </tbody>
                <tbody>
                  <tr>{payment.detail}</tr>
                </tbody>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}}
export default ReviewOrder