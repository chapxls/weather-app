import React, { Component } from 'react';
import styled from 'styled-components'
import sun from '../../assets/sun.png'
import cloud from '../../assets/cloudy.png'
import rainCloud from '../../assets/cloud-with-rain.png'
import partlyCloud from '../../assets/partly-cloudy.png'
import snow from '../../assets/snowy.png'
import thunder from '../../assets/thunder.png'

export default class Card extends Component {

  constructor() {
    super();
    this.state = {
      loading: true,
      weather: null,
    }
  }

  async componentDidMount() {
    const url = "http://wttr.in/Stockholm?format=j1";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      weather: data.current_condition[0],
      loading: false
    });
    console.log(data);
  }

  switchImg() {
    if(this.state.weather.weatherDesc[0].value === 'Clear') {
      return sun;
    } else if(this.state.weather.weatherDesc[0].value === 'Cloudy') {
      return cloud;
    } else if(this.state.weather.weatherDesc[0].value === 'Partly Cloudy') {
      return partlyCloud;
    } else if(this.state.weather.weatherDesc[0].value === 'Rainy') {
      return rainCloud;
    } else if(this.state.weather.weatherDesc[0].value === 'Snowy') {
      return snow;
    } else if(this.state.weather.weatherDesc[0].value === 'Thunder') {
      return thunder;
    }
  }

  render() {
    return (
 
    this.state.loading || !this.state.weather ? (
      <div>Fetching weather data..</div>
      ) : (
        <div className="card">
        <h1>Today</h1>
        <div className="card-body">
          <h5 className="card-title">
            {this.state.weather.temp_C}
          </h5>
          <h6 className="card-subtitle">
            Feels like {this.state.weather.FeelsLikeC}
          </h6>
          <img src={this.switchImg()} alt="weather-img"/>
          <p className="card-text">
            {this.state.weather.weatherDesc[0].value}
          </p>
        </div>
      </div>
        ))
    }
}