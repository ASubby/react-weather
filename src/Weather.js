import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Madrid",
    date: "Tuesday 10:00",
    description: "cloudy",
    humidity: "80",
    wind: "10",
  };
  return (
    <div className="Weather">
      <form id="search-form" className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              className="form-control"
              placeholder="Type a city..."
              autocomplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary"
              w-100
            />
          </div>
        </div>
      </form>
      <div className="overview">
        <h1> {weatherData.city}</h1>
        <ul>
          <li>
            Last updated: <span> {weatherData.date}</span>
          </li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              className="float-left"
              alt="icon"
            />

            <div className="float-left">
              <span className="temperature">12</span>
              <span className="units"> ⁰C </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity:{" "}
              <strong>
                {" "}
                <span>{weatherData.humidity}</span>%
              </strong>
            </li>
            <li>
              Wind:{" "}
              <strong>
                {" "}
                <span>{weatherData.wind}</span>km/h
              </strong>
            </li>
          </ul>
        </div>
      </div>
      <div className="weather-forecast" id="forecast"></div>
    </div>
  );
}
