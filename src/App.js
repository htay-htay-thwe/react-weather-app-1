
import './App.css';
import ReactAnimatedWeather from "react-animated-weather";

function App() {
  return (
    <div className="App">
      <h1>Myanmar</h1>
      <p className="date">
        {" "}
        Thursday,6:30
        <br />
        Clear
      </p>
      <div className="condition">
        <span className="icon">
          {" "}
          icon: 'CLEAR_DAY', color: 'goldenrod', size: 512, animate: true
        </span>
        <span className="degree">27°C</span>
      </div>
      <ul>
        <li>Precipitation : 66%</li>
        <li>Wind : 17km/h</li>
      </ul>
    </div>
  );
}

export default App;
