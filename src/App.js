import "./App.css";
import Search from "./components/searchbar/searchbar";
import Weather from "./components/weather-curr/weather-curr";
import { weatherUrl, weatherKey } from "./API";
import { useState } from "react";
import Forecast from './components/forecast/forecast';

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const OnSearchChange = (searchdata) => {
    const [lat, lon] = searchdata.value.split("");

    const getWeather = fetch(
      `${weatherUrl}/weather?lat=${lat}&lon=${lon}&appid=${weatherKey}&units=metric`
    );
    const getForecast = fetch(
      `${weatherUrl}/forecast?lat=${lat}&lon=${lon}&appid=${weatherKey}&units=metric`
    );

    Promise.all([getWeather, getForecast])
      .then(async (response) => {
        const weatherRes = await response[0].json();
        const forecastRes = await response[1].json();

        setWeather({ city: searchdata.label, ...weatherRes });
        setForecast({ city: searchdata.label, ...forecastRes });
      })
      .catch((error) => console.log(error));
  };

  console.log(forecast);

  return (
    <div className="box">
      <Search onSearchChange={OnSearchChange} />
      {weather && <Weather data={weather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
