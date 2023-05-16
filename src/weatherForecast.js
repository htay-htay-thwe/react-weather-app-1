import React, { useEffect, useState } from "react";
import axios from "axios";
import ForecastDay from "./forecastDay";
export default function WeatherForecast(props){
    let [loaded,setLoaded]=useState(false);
    let[forecast,setForecast]=useState(null);

    useEffect(() => {
      setLoaded(false);
    }, [props.information]);

function handle(response){
    setForecast(response.data.daily);
    setLoaded(true);
}

    if(loaded){
       return (
         <div className="forecastDay">
           <div className="row">
        
               {forecast.map(function (dailyForecast, index) {
                if (index<6){
                return( <div className="col" key={index}>
                <ForecastDay data={dailyForecast} />
                </div>)
                }else{
                    return null;
                }
               })}
             </div>
           </div>
       
       );
  
    }else{
           
        let latitude=props.information.lat;
        let longitude=props.information.lon;
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=cabdbda40038ba7d1165b953b1c7bd6c&units=metric`;
axios.get(apiUrl).then(handle);
    
}
}