import React, { Component } from 'react'
import ReactDOM from "react-dom"

export default class Week extends Component {
  constructor(props) {
    super(props)
    this.state = {
      days: this.props.days,
         scale:this.props.scale
    }
  }
   //////////////***********Get the time and render it **********//////////////////
  tick = () => {
    const element = new Date().toLocaleTimeString()
    ReactDOM.render(element, document.getElementById('tick'));
  }
  //////////////***********Change the temp Scale**********//////////////////
  scaleClick=()=>{
    if(this.state.scale=="F")
   this.setState({scale:"C"})
    else if(this.state.scale=="C")
    this.setState({scale:"F"})
//   }
// tempConvert=()=>{
  this.props.changeScalehandler()
}

  render() {
    ///// setinterval for the time to get it changed every 1sec
    setInterval(this.tick, 1000);
    return (
<div className="container">
  <div className='row border border-primary rounded  text-left' style={{ maxHeight: "600px", backgroundImage: "url('pics/bg.jpg')", height: "200px" }}>
    <div className='col-sm-5'>
   <img  src={this.props.src} className="statusImg my-2"/>
    </div>
    <div className="col-sm">
    <h2 className="my-1" style={{ fontSize: "40px" }}>{this.props.city} </h2>
        <p  onClick={this.scaleClick} style={{ fontSize: "30px" }}>{this.props.temp} < span style={{ color: "blue" }}><b>{this.state.scale}</b></span></p>
        <h4 >{new Date().toDateString()}</h4>
        <p id="tick"></p>
    </div>
    <div className="col-sm">
    </div>
  </div>
</div>

    )

  }
}

Week.defaultProps = {
     scale: "F", 
  };