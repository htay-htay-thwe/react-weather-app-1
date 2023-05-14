
import './App.css';
import FormattedDate from './formattedDate';
import React, {useState} from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import WeatherIcon from './weatherIcon';


function App(props) {
  let [loaded,setLoaded]=useState(false);
  let [city, setCity] = useState(props.defaultCity);
  let [message,setMessage]=useState({});
  
function showTemperature(response){
 setLoaded("true");
  setMessage({
    name : response.data.name,
    temperature : Math.round(response.data.main.temp),
    Description : response.data.weather[0].description,
    icon : response.data.weather[0].icon,
    wind : Math.round(response.data.wind.speed),
    humidity : response.data.main.humidity,
    time : new Date(response.data.dt*1000),
    description : response.data.weather[0].description,
  })
}

function handle(event){
  event.preventDefault();
  search();
 
}
function search(){
   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=97f8e93f00107773f88eafd933ce86b7&units=metric`;
   console.log(apiUrl);
   axios.get(apiUrl).then(showTemperature);
}

function showCity(event){
  setCity(event.target.value);
}

if(loaded){
  return (
    <div className="App">
      <section>
        <form onSubmit={handle}>
          <div className="row">
            <div className="col-5">
              <input
                type="search"
                placeholder="Enter a City"
                onChange={showCity}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Submit" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <h1 className="text-capitalize">{city}</h1>
        <p className="date text-capitalize">
          {" "}
          <FormattedDate date={message.time}/>
          <p>
          {message.Description}
          </p>
        </p>

        <div className="row">
          <div className="col-6">
            <div className="condition">
              <WeatherIcon code={message.icon} />
              <span className="degree">{message.temperature}</span>
              <span className="cel">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity : {message.humidity}%</li>
              <li>Wind :{message.wind}km/h</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
 else {
  search();
  return "Loading..."
}
}


export default App;
