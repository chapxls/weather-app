import React, { Component } from "react";
import "./Card.scss";
import sun from "../../assets/sun.png";
import cloud from "../../assets/cloudy.png";
import rainCloud from "../../assets/cloud-with-rain.png";
import partlyCloud from "../../assets/partly-cloudy.png";
import snow from "../../assets/snowy.png";
import thunder from "../../assets/thunder.png";
import fog from "../../assets/fog.png";
import lightRain from "../../assets/light-rain.png";

export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      weather: null,
    };
  }

  async componentDidMount() {
    const url = "http://wttr.in/Stockholm?format=j1";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      weather: data.current_condition[0],
      loading: false,
    });
  }

  switchImg() {
    let weatherDesc = this.state.weather.weatherDesc[0].value;

    if (weatherDesc === "Clear") {
      return sun;
    } else if (weatherDesc === "Cloudy") {
      return cloud;
    } else if (weatherDesc === "Partly cloudy") {
      return partlyCloud;
    } else if (weatherDesc === "Rainy") {
      return rainCloud;
    } else if (weatherDesc === "Snowy") {
      return snow;
    } else if (weatherDesc === "Thunder") {
      return thunder;
    } else if (weatherDesc === "Fog") {
      return fog;
    } else if (weatherDesc === "Light rain") {
      return lightRain;
    } else if (weatherDesc === "Overcast") {
      return cloud;
    }
  }

  render() {
    return this.state.loading || !this.state.weather ? (
      <div>Loading weather data..</div>
    ) : (
      <div className="container p-0">
        <div className="row no-gutters">
          <h1 className="col-12">Today</h1>
          <div className="col-12 card">
            <div className="card-body">
              <div className="col-6 col-sm-12 p-0">
                <h5 className="card-title">{this.state.weather.temp_C}°</h5>
                <h6 className="card-subtitle">
                  Feels like {this.state.weather.FeelsLikeC}°
                </h6>
              </div>
              <div className="col-6 col-sm-12 p-0">
                <img src={this.switchImg()} alt="weather-img" />
                <p className="card-text">
                  {this.state.weather.weatherDesc[0].value}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
