import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import Weatherdata from "./Weatherdata";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.city);

  function showTemp(response) {
    setWeather({
      ready: "true",
      temp: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    let apiKey = "c0ed04c902a245721bb289e92dca75fe";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showTemp);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSearch(event) {
    event.preventDefault();
    search();
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <h1>Real Time Weather</h1>
        <h3>
          <FormattedDate date={weather.date} />
        </h3>
        <form className="searchForm mt-4 mt-md-5" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Enter a city"
            className="cityInput"
            autoFocus="on"
            onChange={updateCity}
          />
          <input type="submit" value="Search" className="searchBtn" />
        </form>
        <Weatherdata data={weather} />
      </div>
    );
  } else {
    search();
    return "Loading ...";
  }
}
