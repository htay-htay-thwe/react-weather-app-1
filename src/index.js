import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactAnimatedWeather from "react-animated-weather";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <section>
      <form>
        <input type="text" placeholder="Enter a City"/>
        <button>Submit</button>
      </form>
      <h1>Myanmar</h1>
      <p className="date">
        {" "}
        Thursday,6:30
        <br />
        Clear
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
        <span className="degree">27°C</span>
      </div>
      <ul>
        <li>Humidity : 66%</li>
        <li>Wind : 17km/h</li>
      </ul>
    </section>

    <p className="open">
      <a href="https://github.com/htay-htay-thwe/react-weather-app-1">
        open sourced code
      </a>{" "}
      by Htay Htay Thwe
    </p>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
