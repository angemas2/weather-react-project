import React from "react";
import Weathericon from "./Weathericon";
import Units from "./Units";



export default function Weatherdata(props){
    return (
      <div className="currentWeather mt-4 mt-md-5">
        <div className="row">
          <div className="col tempdesc">
            <h4>{props.data.city}</h4>
            <Units celsius={props.data.temp} />
            <div className="currentDesc text-capitalize">
              {props.data.description}
            </div>
          </div>
          <div className="col canvas">
            <Weathericon code={props.data.icon} size={125} />
          </div>
        </div>
        <ul className="currentDetails mt-md-4 mb-0">
          <li>
            <i className="fa-solid fa-droplet"></i> {props.data.humidity}%
          </li>
          <li>
            <i className="fa-solid fa-wind me-1"></i>
            
            {props.data.wind}m/s
          </li>
        </ul>
      </div>
    );
}