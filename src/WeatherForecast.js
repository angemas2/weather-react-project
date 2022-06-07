import axios from "axios";
import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import DailyForecast from "./DailyForecast";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [data, setData] = useState(null);

  function showForecast(response) {
    setLoaded(true);
    setData(response.data.daily);
  }

useEffect(()=>{
  setLoaded(false);
},[props.coordinates])

  if (loaded) {
  
    return (
      <div className="row mt-4 mt-md-5 ">
        {data.map(function (dailyData, index) {
          if(index<5){return (
            <div
              className="col mt-2 dailyForecast-card forecastDay"
              key={index}
            >
              <DailyForecast forecast={dailyData} />
            </div>
          );}
          
        })}
      </div>
    );
  } else {
    let apiKey = "c0ed04c902a245721bb289e92dca75fe";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(url).then(showForecast);
    return null;
  }
}
