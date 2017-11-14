import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

class STChart extends Line {
  constructor(props) {
      super(props)
      this.state = {
        display: this.props.visible
      }
  }
  render() {
    var _display = this.state.display ? 'block':'none';
    var divStyle = {
      display: _display,
    }
    console.log(this);
    return (
      <div style={divStyle}>
        {super.render()}
        <svg>
          <ine x1={0} y1={0} x2={200} y2={200} />
        </svg>
      </div>
    )
    // if(this.state.display === false){
    //   return null;
    // }else{
    //   return super.render();
    // }
  }
}

export default STChart;
