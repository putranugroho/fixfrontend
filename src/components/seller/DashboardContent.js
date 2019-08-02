import React, {Component} from 'react'


import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  LabelSeries
} from 'react-vis';

const greenData = [{x: 'A', y: 10}, {x: 'B', y: 5}, {x: 'C', y: 15}];

const blueData = [{x: 'A', y: 12}, {x: 'B', y: 2}, {x: 'C', y: 11}];

const labelData = greenData.map((d, idx) => ({
  x: d.x,
  y: Math.max(greenData[idx].y, blueData[idx].y)
}));



class DashboardContent extends Component{

    state = {
        useCanvas: false
      };

      BestSeller = () => {
          return(
              <div>
                <h1>Best Seller</h1>
                <table className="table table-hover ">
                    <thead>
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Sold</th>
                            <th scope="col">Revenue</th>
                        </tr>
                    </thead>
                        <tbody>
                            <tr>
                                <td>Boosted Board</td>
                                <td>$1,999</td>
                                <td>10</td>
                                <td>$19,990</td>
                            </tr>
                        </tbody>
                </table>
              </div>
          )
      }

      barchart = () => {
        
        const {useCanvas} = this.state;
        const content = useCanvas ? 'TOGGLE TO SVG' : 'TOGGLE TO CANVAS';
        const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;

        return (
          <div className="card">
            
            <button
            onClick={() => this.setState({useCanvas: !useCanvas})}
            buttonContent={content}
            />

            <XYPlot xType="ordinal" width={300} height={300} xDistance={100}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <BarSeries className="vertical-bar-series-example" data={greenData} />
                <BarSeries data={blueData} />
                <LabelSeries data={labelData} getLabel={d => d.x} />
            </XYPlot>
          </div>
        );
      }

    createTable = () => {
        return(
                <div className="row">

                    <div className="card bg-white rounded col-2 m-3 shadow" >
                        <h5 className="card-title">Today</h5>
                        <h6 className="card-subtitle mb-2 text-muted">$ 1,999</h6>
                        <p className="card-text">Jakarta</p>
                    </div>

                    <div className="card bg-white rounded col-2 m-3 shadow" >
                        <h5 className="card-title">Yesterday</h5>
                        <h6 className="card-subtitle mb-2 text-muted">$ 1,999</h6>
                        <p className="card-text">Jakarta</p>
                    </div>

                    <div className="card bg-white rounded col-2 m-3 shadow" >
                        <h5 className="card-title">Last Week</h5>
                        <h6 className="card-subtitle mb-2 text-muted">$ 1,999</h6>
                        <p className="card-text">Jakarta</p>
                    </div>

                    <div className="card bg-white rounded col-2 m-3 shadow" >
                        <h5 className="card-title">Last Month</h5>
                        <h6 className="card-subtitle mb-2 text-muted">$ 1,999</h6>
                        <p className="card-text">Jakarta</p>
                    </div>

                    <div className="card bg-white rounded col-2 m-3 shadow" >
                        <h5 className="card-title">Last 90-days</h5>
                        <h6 className="card-subtitle mb-2 text-muted">$ 1,999</h6>
                        <p className="card-text">Jakarta</p>
                    </div>
                </div>
            )
          
      }

    render(){
        return(
            <div className="container">
                {this.createTable()}

                <div className="row">

                    <div className="col-4">
                        

                            <div className="row">
                                <div className="card bg-white rounded m-3 shadow" >
                                    <h5 className="card-title">Revenue</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">$ 1,999</h6>
                                    <p className="card-text">Jakarta</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="card bg-white m-3 rounded shadow" >
                                    <h5 className="card-title">Orders</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">27 Orders</h6>
                                    <p className="card-text">Jakarta</p>
                                </div>
                            </div>

                    </div>


                    <div className="col-8">
                        {this.barchart()}
                    </div>

                    <div className="row">
                        <div className="col">
                            {this.BestSeller()}
                        </div>

                        <div className="col">
                            {this.barchart()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default DashboardContent