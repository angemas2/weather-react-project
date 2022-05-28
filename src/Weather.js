import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });

  function showTemp(response) {
    setWeather({
      ready: "true",
      temp: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      city: response.data.name,
      date:new Date(response.data.dt*1000),
    });
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <h1>Real Time Weather</h1>
        <h3><FormattedDate date={weather.date}/></h3>
        <form className="searchForm mt-5">
          <input
            type="text"
            placeholder="Enter a city"
            className="cityInput"
            autoFocus="on"
          />
          <input type="submit" value="Search" className="searchBtn" />
        </form>
        <div className="currentWeather mt-5">
          <p>{weather.city}, May, 27th</p>
          <div class="row">
            <div class="col tempdesc">
              <div className="currentTemp">{Math.round(weather.temp)}°C</div>
              <div className="currentDesc text-capitalize">{weather.description}</div>
            </div>
            <div class="col">
              <img src={weather.icon} alt={weather.description} width="100px" />
            </div>
          </div>
          <ul className="currentDetails mt-4">
            <li>Humidity : {weather.humidity}%</li>
            <li>wind speed : {weather.wind}m/s</li>
          </ul>
        </div>
      </div>
    );
  } else {
    let apiKey = "c0ed04c902a245721bb289e92dca75fe";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showTemp);
    return "Loading ...";
  }
}
