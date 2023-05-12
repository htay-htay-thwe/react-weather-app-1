
import './App.css';
import React, {useState} from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

function App() {
  let [city,setCity]=useState("");
  let [message,setMessage]=useState({});
  let [loaded,setLoaded]=useState(false);
function showTemperature(response){
  setLoaded(true);
  setMessage({
    name : response.data.name,
    temperature : Math.round(response.data.main.temp),
    Description : response.data.weather[0].description,
    icon : `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    wind : Math.round(response.data.wind.speed),
    humidity : response.data.main.humidity,
    description : response.data.weather[0].description,
  })

}

function handle(event){
  event.preventDefault();
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=97f8e93f00107773f88eafd933ce86b7`;
console.log(apiUrl);
axios.get(apiUrl).then(showTemperature);
}
function showCity(event){
  setCity(event.target.value);
}


if (loaded){
  return (
    <div className="App">
      <section>
        <form onSubmit={handle}>
          <input type="text" placeholder="Enter a City" onUpdate={showCity}/>
          <button>Submit</button>
        </form>
        <h1>{message.name}</h1>
        <p className="date">
          {" "}
          Thursday,6:30
          <br />
          {message.description}
        </p>
        <div className="condition">
          <span className="icon">
            <ReactAnimatedWeather
              icon="PARTLY_CLOUDY_DAY"
              color="goldenrod"
              size={60}
              animate={true}
            />
          </span>
          <span className="degree">{message.temperature}°C</span>
        </div>
        <ul>
          <li>Humidity : {message.humidity}%</li>
          <li>Wind :{message.wind}km/h</li>
        </ul>
      </section>

      <p className="open">
        <a href="https://github.com/htay-htay-thwe/react-weather-app-1">
          open sourced code
        </a>{" "}
        by Htay Htay Thwe
      </p>
    </div>

  );
}
}

export default App;
