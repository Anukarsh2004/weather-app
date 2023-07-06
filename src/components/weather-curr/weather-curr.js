
import "./weather-curr.css";

const Weather = ({data}) => {
  return (
    <div className="currWeather">
      <div className="above">
        <div>
          <p className="city"> {data.city} </p>
          <p className="description"> {data.weather[0].description}</p>
        </div>
      <img alt="weather" className="icon" src={`icons/${data.weather[0].icon}.png`} />
      </div>
      <div className= "below"> 
        <p className="temp">{data.main.temp}°C</p>
        <div classname="extrainfo">
            <div className="row">
                <span className="Details"> Details</span>
            </div>
            <div className="row">
            <span className="label">Wind: </span>
            <span className="value">{data.wind.speed} m/s</span>
          </div>
          <div className="row">
            <span className="label">Humidity: </span>
            <span className="value" >{data.main.humidity}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
