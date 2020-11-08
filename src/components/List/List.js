import React, { Component } from "react";
import "./List.scss";
import { getData } from "../utils/API";

export default class List extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      comingWeather: [],
      active: 1, // Is set to 1 to get second value in array showing on page reload
    };

    this.toggleClick = this.toggleClick.bind(this);
  }

  async componentDidMount() {
    const apiData = await getData();

    this.setState({
      comingWeather: apiData.weather,
      loading: false,
    });
  }

  getWeekday(dateStr, locale) {
    let date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: "long" });
  }

  getMonthStr(dateStr, locale) {
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

  toggleClick(weekdayId, event) {
    this.setState({
      active: weekdayId,
    });

    // Checks if list inside col is showing to close it
    if (this.state.active === weekdayId) {
      this.setState({
        active: null,
      });
    }
  }

  render() {
    return this.state.loading || !this.state.comingWeather ? (
      <div>Loading weather data..</div>
    ) : (
      <div className="container-fluid list-container">
        <h1>Upcoming days</h1>
        {this.state.comingWeather.map((weatherInfo, index) => {
          return (
            <div
              className="row list-row"
              key={index}
              onClick={this.toggleClick.bind(this, index)}
            >
              <div className="col-12 p-0 d-flex list-main-col">
                <div className="col-7 p-0">
                  <p>{this.getWeekday(weatherInfo.date, "se-SE")}, </p>
                  <p>{this.getMonthStr(weatherInfo.date, "se-SE")}</p>
                </div>
                <div className="col-5 p-0 text-right">
                  <p className="max-temp">{weatherInfo.maxtempC}°</p>
                  <p className="min-temp">{weatherInfo.mintempC}°</p>
                </div>
              </div>
              {this.state.active === index ? (
                <div className="col-12 p-0 d-flex list-inside-main-col">
                  <div className="inline-block">
                    <span className="item-desc">Sunrise</span>
                    <span>{weatherInfo.astronomy[0].sunrise}</span>
                  </div>
                  <div className="inline-block">
                    <span className="item-desc">Sunset</span>
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
