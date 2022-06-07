import React from "react";
import Weathericon from "./Weathericon";

export default function dailyForecast(props) {

    function max(){
        let maxTemp=Math.round(props.forecast.temp.max);
        return `${maxTemp}°`
    }

      function min() {
        let minTemp = Math.round(props.forecast.temp.min);
        return `${minTemp}°`;
      }

      function weekDay(){
          let days=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
          let date=new Date(props.forecast.dt*1000);
          let day=date.getDay()
          let weekday=days[day]
          return weekday
      }

  return (
    <div>
      <div class="mb-2">{weekDay()}</div>
      <div>
        <Weathericon code={props.forecast.weather[0].icon} size={30} />
      </div>
      <span className="forecast-temp-max">{max()} </span>
      <span className="forecast-temp-min">{min()}</span>
    </div>
  );
}
