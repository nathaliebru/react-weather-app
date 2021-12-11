import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [ready, setReady] = useState(false);
  const [forecast, setForecast] = useState("");

  function handleResponse(response) {
    setReady(true);
    setForecast({
      temperatureMin: response.data.daily[0].temp.min,
      temperatureMax: response.data.daily[0].temp.max,
      icon: response.data.daily[0].weather[0].icon,
      day: response.data.daily[0].dt,
    });
  }

  if (ready) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day"> {forecast.day}</div>
            <WeatherIcon code={forecast.icon} size={45} />
            <div className="WeatherForecast-temperature">
              {" "}
              {Math.round(forecast.temperatureMin)}°{" "}
              {Math.round(forecast.temperatureMax)}°
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "e6510698077be6c89580a721b02f9621";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
