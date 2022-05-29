import React from "react";



export default function Weatherdata(props){
    return (
      <div className="currentWeather mt-5">
        <h1>
          {props.data.city}
        </h1>
        <div class="row">
          <div class="col tempdesc">
            <div className="currentTemp">{Math.round(props.data.temp)}°C</div>
            <div className="currentDesc text-capitalize">
              {props.data.description}
            </div>
          </div>
          <div class="col">
            <img
              src={props.data.icon}
              alt={props.data.description}
              width="100px"
            />
          </div>
        </div>
        <ul className="currentDetails mt-4">
          <li>Humidity : {props.data.humidity}%</li>
          <li>wind speed : {props.data.wind}m/s</li>
        </ul>
      </div>
    );
}