import React, { Component } from 'react'
import Week from './Week'
import Day from "./Day"
import DayDetails from './DayDetails'

export default class WeatherBoard extends Component {
  constructor(props) {
    super(props);
    this.ChildElement = React.createRef();
    this.state = {
      citys: cityList,
      day: "",
      searchCity: "",
      target: {},
      todayTempList: [],
      todayTemp: "0/0",
      scale: "F",
      statusImg: "pics/sunny.jpg"
    }
  }
  //////////////***********Convert the day index into string**********//////////////////
  getDay = () => {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var n = weekday[d.getDay()]
    return n
  }

  //////////////***********Get the city from an input and handle it **********//////////////////
  handleCityInput = (e) => {
    this.setState({ target: e.target })
  }

  HandleSearch = () => {
    this.setState({
      searchCity: this.state.target.value.toLowerCase()
    })
    if (this.state.target.value != "")
      this.getPeriodsTemp(this.state.target.value, this.getDay())
  }
  //////////////***********Clear the input **********//////////////////
  clear = () => {
    this.setState({ searchCity: "", todayTempList: [], todayTemp: "0/0", statusImg: "pics/sunny.jpg" })
    document.getElementById("input").value = ""
  }
  //////////////***********Get the Temp list of specfic city and day **********//////////////////
  getPeriodsTemp = (x, dayy) => {
    this.state.citys.map(city => {
      if (city.cityName.toLowerCase() == x.toLowerCase())
        for (let j = 0; j < city.days.length; j++)
          if (city.days[j].day == dayy) {
            let lTemp = Math.min(...city.days[j].tempList)
            let hTemp = Math.max(...city.days[j].tempList)
            let temp = `${lTemp}/${hTemp}`
            this.setState({ day: dayy, searchCity: x, todayTempList: city.days[j].tempList, todayTemp: temp, scale: "F", statusImg: `pics/${city.days[j].status}.jpg` })
          }
    })
  }
  //////////////***********Convert Temp C/F **********//////////////////
  toCelsius = (fahrenheit) => {
    return Math.round((fahrenheit - 32) * 5 / 9);
  }

  toFahrenheit = (celsius) => {
    return Math.round((celsius * 9 / 5) + 32);
  }

  convertTemp = (x) => {
    let y
    if (Array.isArray(x)) {
      {
        if (this.state.scale == "F")
          y = x.map(temp => this.toFahrenheit(temp))
        else
          y = x.map(temp => this.toCelsius(temp))
      }
    }
    else {
      if (this.state.scale == "F")
        y = this.toFahrenheit(x)
      else
        y = this.toCelsius(x)
    }
    return y
  }

  convertScale = () => {
    if (this.state.scale == "F")
      this.setState({ scale: "C" })
    else if (this.state.scale == "C")
      this.setState({ scale: "F" })
  }
  render() {
    return (
      <div className="container " >

        <div className="input-group-prepend my-3  d-flex justify-content-center"  >
          <input id="input" onChange={this.handleCityInput} name="city" type="text" className="form-control border border-primary rounded my-4" placeholder="City..." style={{ maxWidth: "250px" }} aria-describedby="basic-addon1" />
          <button type="button" class="btn btn-primary btn-sm mx-2 my-4" style={{ height: "40px" }} onClick={this.HandleSearch}>Search</button>
          <button type="button" class="btn btn-primary btn-sm mx-2 my-4" style={{ height: "40px" }} onClick={this.clear}>Clear</button>
        </div>
        <div>
          {this.state.citys.map((city => {
            if (city.cityName.toLowerCase() == this.state.searchCity) {
              return <>
                <div>
                  <Week ref={this.Childelement} key={city.cityName} city={city.cityName} temp={this.state.todayTemp} scale={this.state.scale} src={this.state.statusImg} changeScalehandler={this.convertScale} />
                  <DayDetails periodsTemp={this.state.todayTempList} />
                </div>
                <div className="card-deck">

                  {city.days.map(weekday =>
                    <Day key={weekday.day} day={weekday.day} lTemp={Math.min(...weekday.tempList)} hTemp={Math.max(...weekday.tempList)} src={`pics/${weekday.status}.jpg`} id={weekday.day} city={this.state.searchCity} scale={this.state.scale} clickHandler={this.getPeriodsTemp} />

                  )}
                </div>
              </>
            }

          })
          )}

        </div>
      </div>
    )
  }
}

const cityList = [{
  cityName: "Charlotte", days: [
    { day: 'Saturday', status: "sunny", tempList: [30, 45, 56, 68, 60, 54, 45, 40, 37] },
    { day: 'Sunday', status: "sunnyclouday", tempList: [22, 34, 53, 62, 67, 74, 64, 50, 42] },
    { day: 'Monday', status: "sunny", tempList: [35, 45, 56, 68, 60, 54, 48, 44, 33] },
    { day: 'Tuesday', status: "cloudy", tempList: [23, 35, 46, 58, 60, 64, 42, 40, 37] },
    { day: 'Wednesday', status: "rainy", tempList: [20, 34, 56, 62, 67, 70, 64, 50, 49] },
    { day: 'Thursday', status: "sunny", tempList: [25, 34, 56, 62, 67, 76, 64, 50, 45] },
    { day: 'Friday', status: "sunny", tempList: [22, 34, 56, 62, 67, 74, 64, 50, 42] }]
},

{
  cityName: "Chicago", days: [
    { day: 'Saturday', temerature: 20, status: "sunnyclouday", tempList: [20, 34, 56, 62, 67, 70, 64, 50, 49] },
    { day: 'Sunday', temerature: 20, status: "sunny", tempList: [25, 30, 52, 62, 67, 76, 64, 55, 45] },
    { day: 'Monday', temerature: 20, status: "cloudy", tempList: [23, 34, 56, 67, 64, 60, 62, 50, 40] },
    { day: 'Tuesday', temerature: 20, status: "cloudy", tempList: [30, 32, 56, 61, 67, 70, 64, 60, 45] },
    { day: 'Wednesday', temerature: 20, status: "sunnyclouday", tempList: [22, 34, 56, 62, 67, 74, 64, 50, 42] },
    { day: 'Thursday', temerature: 20, status: "rainy", tempList: [27, 34, 56, 62, 67, 79, 64, 50, 48] },
    { day: 'Friday', temerature: 20, status: "sunny", tempList: [32, 34, 56, 62, 66, 70, 64, 50, 39] }]
},

{
  cityName: "", days: [
    { day: 'Saturday', temerature: "", status: "sunny", tempList: [0, 0, 0, 0] },
    { day: 'Sunday', status: "sunny", tempList: [0, 0, 0, 0] },
    { day: 'Monday', status: "sunny", tempList: [0, 0, 0, 0] },
    { day: 'Tuesday', status: "sunny", tempList: [0, 0, 0, 0] },
    { day: 'Wednesday', status: "sunny", tempList: [0, 0, 0, 0] },
    { day: 'Thursday', status: "sunny", tempList: [0, 0, 0, 0] },
    { day: 'Friday', status: "sunny", tempList: [0, 0, 0, 0] }]
},

{
  cityName: "Boston", days: [
    { day: 'Saturday', temerature: 20, status: "sunnyclouday", tempList: [20, 34, 56, 62, 67, 70, 64, 50, 49] },
    { day: 'Sunday', temerature: 20, status: "cloudy", tempList: [25, 30, 52, 62, 67, 76, 64, 55, 45] },
    { day: 'Monday', temerature: 20, status: "sunny", tempList: [23, 34, 56, 67, 64, 60, 62, 50, 40] },
    { day: 'Tuesday', temerature: 20, status: "sunnyclouday", tempList: [30, 32, 56, 61, 67, 70, 64, 60, 45] },
    { day: 'Wednesday', temerature: 20, status: "sunny", tempList: [22, 34, 56, 62, 67, 74, 64, 50, 42] },
    { day: 'Thursday', temerature: 20, status: "sunny", tempList: [27, 34, 56, 62, 67, 79, 64, 50, 48] },
    { day: 'Friday', temerature: 20, status: "rainy", tempList: [32, 34, 56, 62, 66, 70, 64, 50, 39] }]
}
]

