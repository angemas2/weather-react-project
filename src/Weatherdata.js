import React from "react";
import Weathericon from "./Weathericon";



export default function Weatherdata(props){
    return (
      <div className="currentWeather mt-5">
        <div class="row">
          <div class="col tempdesc">
            <h4>{props.data.city}</h4>
            <div className="currentTemp">{Math.round(props.data.temp)}°C</div>
            <div className="currentDesc text-capitalize">
              {props.data.description}
            </div>
          </div>
          <div class="col canvas">
            <Weathericon code={props.data.icon} />
          </div>
        </div>
        <ul className="currentDetails mt-4">
          <li>Humidity : {props.data.humidity}%</li>
          <li>wind speed : {props.data.wind}m/s</li>
        </ul>
      </div>
    );
}