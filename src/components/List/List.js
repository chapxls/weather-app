import React, { Component } from 'react';

export default class List extends Component {

  constructor() {    
    super();
    this.state = {
      loading: true,
      comingWeather: [],
    }
  }

  async componentDidMount() {
    const url = "http://wttr.in/Stockholm?format=j1";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      comingWeather: data.weather,
      loading: false
    });
  }

getDayName(dateStr, locale) {
      let date = new Date(dateStr);
      return date.toLocaleDateString(locale, { weekday: 'long' });        
  }

  render() {
    return (
 
    this.state.loading || !this.state.comingWeather ? (
      <div>Fetching weather data..</div>
      ) : (
        <div className="row">
        <div className="col-12">
            <h1>Upcoming days</h1>
            <ul>
                {this.state.comingWeather.map((weatherInfo) => {
               
                return (
                    <li>
                        {this.getDayName(weatherInfo.date, 'se-SE')}, 
                        {weatherInfo.date}
                    </li>
                    )
                 })}
            </ul>
        </div>
      </div>
    ))
  }
}
