import React, { Component } from "react";
import "./Card.scss";
import { getData } from "../utils/API";
import { switchImg } from "../utils/imageSwitcher";

export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      weather: null,
    };
  }

  async componentDidMount() {
    const apiData = await getData();

    this.setState({
      weather: apiData.current_condition[0],
      loading: false,
    });
  }

  render() {
    return this.state.loading || !this.state.weather ? (
      <div>Loading weather data..</div>
    ) : (
      <div className="container-fluid p-0 card-container">
        <div className="row no-gutters">
          <h1 className="col-12">Today</h1>
          <div className="col-12 card">
            <div className="card-body">
              <div className="col-6 col-lg-12 p-0">
                <h5 className="card-title">{this.state.weather.temp_C}°</h5>
                <h6 className="card-subtitle">
                  Feels like {this.state.weather.FeelsLikeC}°
                </h6>
              </div>
              <div className="col-6 col-lg-12 p-0">
                <div className="image-wrapper">
                  <img
                    src={switchImg(this.state.weather.weatherDesc[0].value)}
                    alt="weather-img"
                  />
                </div>
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
