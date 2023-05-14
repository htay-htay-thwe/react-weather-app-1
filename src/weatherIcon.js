import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';
export default function WeatherIcon(props){
   let codeMapping = {
      "01d": "CLEAR_DAY",
      "02d": "PARTLY_CLOUDY_DAY",
      "03d": "CLOUDY",
      "04d": "PARTLY_CLOUDY_DAY",
      "09d": "RAIN",
      "10d": "RAIN",
      "11d": "RAIN",
      "13d": "SNOW",
      "50d": "SLEET",
      "01n": "CLEAR_DAY",
      "02n": "PARTLY_CLOUDY_DAY",
      "03n": "CLOUDY",
      "04n": "PARTLY_CLOUDY_DAY",
      "09n": "RAIN",
      "10n": "RAIN",
      "11n": "RAIN",
      "13n": "SNOW",
      "50n": "SLEET",
    };
    
    return (
      
      <ReactAnimatedWeather
        icon={codeMapping[props.code]}
        color="pink"
        size={56}
        animate={true}
      />
     
    );
      
    
}