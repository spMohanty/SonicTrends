import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.min.css';

import STNavBar from './STNavBar.js';
import STChart from './STChart.js'
import STSearchBar from './STSearchBar.js'
import './App.css';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'SonicTrends',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        data:data
      }
  }

  render() {
    return (
      <div>
        <STNavBar></STNavBar>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <STSearchBar/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <STChart data={this.state.data} visible={false}></STChart>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
