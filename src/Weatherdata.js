import React from "react";
import Weathericon from "./Weathericon";
import Units from "./Units";



export default function Weatherdata(props){
    return (
      <div className="currentWeather mt-5">
        <div class="row">
          <div class="col tempdesc">
            <h4>{props.data.city}</h4>
            <Units celsius={props.data.temp} />
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