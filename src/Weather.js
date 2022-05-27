import React from "react";
import "./Weather.css";

export default function Weather(){
    return (
      <div className="Weather">
        <h1>Real Time Weather</h1>
        <h3>Last Updated : May,25 21:21</h3>
        <form className="searchForm mt-5">
          <input type="text" placeholder="Enter a city" className="cityInput" autoFocus="on"/>
          <input type="submit" value="Search" className="searchBtn" />
        </form>
        <div className="currentWeather mt-5">
          <p>Bruxelles, May 27th</p>
          <div class="row">
            <div class="col tempdesc">
              <div className="currentTemp">22°C</div>
              <div className="currentDesc">Cloudy</div>
            </div>
            <div class="col">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
                alt="cloudy" width="100px"
              />
            </div>
          </div>
          <ul className="currentDetails mt-4">
            <li>Humidity : x</li>
            <li>precipitation : x</li>
            <li>wind speed : x</li>
          </ul>
        </div>
      </div>
    );
}