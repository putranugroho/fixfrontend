import React,{Component} from 'react';


class AddressForm extends Component {
    render(){
  return (
    <React.Fragment>
      <h1 className="card-title" >
        Shipping address
      </h1>
      <div className="card-body">
        <div className="form-group">
            <label for="registerName">
            Name
            </label>
            <input type="name"
            className="form-control"
            id="registerName"
            placeholder="Name"
            />
        </div>

        <div className="form-group">
            <label for="address">
            Address
            </label>
            <input type="text"
            className="form-control"
            id="address"
            placeholder="Address"
            />
        </div>
        
        <div className="row">
        <div className="form-group col">
            <label for="city">
            City
            </label>
            <input type="text"
            className="form-control"
            id="city"
            placeholder="City"
            />
        </div>

        <div className="form-group col">
            <label for="state">
            State/Province/Region
            </label>
            <input type="text"
            className="form-control"
            id="state"
            placeholder="State/Province/Region"
            />
        </div>
        </div>

        <div className="row">
        <div className="form-group col">
            <label for="zip">
            Zip/Postal Code
            </label>
            <input type="text"
            className="form-control"
            id="zip"
            placeholder="Zip/Postal Code"
            />
        </div>

        <div className="form-group col">
            <label for="country">
            Country
            </label>
            <input type="text"
            className="form-control"
            id="country"
            placeholder="Country"
            />
        </div>
        </div>

        <div className="form-group">
          <input
            type="checkbox"
          /> Use this address for payment details
        </div>
      </div>
    </React.Fragment>
  );
}
}

export default AddressForm