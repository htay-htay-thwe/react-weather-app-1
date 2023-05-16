import React from "react";
import WeatherIcon from "./weatherIcon";

export default function ForecastDay(props){
  function showday() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    let day = date.getDay();
    return days[day];
  }

return (
  <div className="forecastDay">
  <div>{showday()}</div>
    <div>
      <WeatherIcon code={props.data.weather[0].icon} size={35}/>
    </div>
    <div>
      <span>{Math.round(props.data.temp.max)}°</span>
      <span> {Math.round(props.data.temp.min)}°</span>
      </div>
      </div>
);

}