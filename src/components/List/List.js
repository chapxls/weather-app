import React, { Component } from "react";
import "./List.scss";

export default class List extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      comingWeather: [],
      active: 1,
    };

    this.toggleClick = this.toggleClick.bind(this);
  }

  async componentDidMount() {
    const url = "http://wttr.in/Stockholm?format=j1";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      comingWeather: data.weather,
      loading: false,
    });
  }

  getDayName(dateStr, locale) {
    let date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: "long" });
  }

  getMonthName(dateStr, locale) {
    let date = new Date(dateStr),
      months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
    return date.getDate() + " " + months[date.getMonth()].slice(0, 3);
  }

  toggleClick(i, event) {
    this.setState({
      active: i,
    });

    if (this.state.active === i) {
      this.setState({
        active: null,
      });
    }
  }

  render() {
    return this.state.loading || !this.state.comingWeather ? (
      <div>Loading weather data..</div>
    ) : (
      <div className="container-fluid">
        <h1>Upcoming days</h1>
        {this.state.comingWeather.map((weatherInfo, index) => {
          return (
            <div
              className="row upcoming-weather-list-row"
              key={index}
              data-id={index}
              onClick={this.toggleClick.bind(this, index)}
            >
              <div className="col-12 p-0 d-flex weekday-col">
                <div className="col-7 p-0">
                  <p>{this.getDayName(weatherInfo.date, "se-SE")}, </p>
                  <p>{this.getMonthName(weatherInfo.date, "se-SE")}</p>
                </div>
                <div className="col-5 p-0 text-right">
                  <p className="max-temp">{weatherInfo.maxtempC}°</p>
                  <p className="min-temp">{weatherInfo.mintempC}°</p>
                </div>
              </div>
              {this.state.active === index ? (
                <div className="col-12 p-0 d-flex">
                  <div className="sun">
                    <span className="sun-mode">Sunrise</span>
                    <span>{weatherInfo.astronomy[0].sunrise}</span>
                  </div>
                  <div className="sun">
                    <span className="sun-mode">Sunset</span>
                    <span>{weatherInfo.astronomy[0].sunset}</span>
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    );
  }
}
