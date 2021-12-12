import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecastDay-day"> {day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={35} />
      <div>
        <span className="WeatherForecastDay-temp-min">
          {Math.round(props.data.temp.min)}°
        </span>{" "}
        {Math.round(props.data.temp.max)}°
      </div>
    </div>
  );
}
