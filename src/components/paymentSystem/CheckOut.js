import React from 'react';

import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import ReviewOrder from './ReviewOrder';


const steps = ['Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <ReviewOrder />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <div className="container">
      <main >
        <div className="col mx-auto mt-5 card shadow-lg  bg-white rounded">
          <h1>
            Checkout
          </h1>
          
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <h5>
                  Thank you for your order.
                </h5>
                <h6>
                  Your order number is #2001539. We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
                </h6>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className="row">
                <div className="col">
                  {activeStep !== 0 && (
                    <button type="submit" className="btn btn-success btn-block m-3" onClick={handleBack}>
                      Back
                    </button>
                  )}
                </div>
                <div className="col">
                  <button
                    type="submit" 
                    className="btn btn-success btn-block m-3"
                    onClick={handleNext}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </button>
                  </div>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </div>
      </main>
      </div>
    </React.Fragment>
  );
}