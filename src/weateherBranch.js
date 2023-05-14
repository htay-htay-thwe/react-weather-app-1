import React from "react";
import App from "./App";
export default function WeatherBranch(){
    return (
      <div className="weatherBranch">
        <App defaultCity="New York" />
        <p className="open">
          <a href="https://github.com/htay-htay-thwe/react-weather-app-1">
            open sourced code
          </a>{" "}
          by Htay Htay Thwe
        </p>
      </div>
    );
}