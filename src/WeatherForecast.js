import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day"> Fri</div>
          <WeatherIcon code="01d" size="45" />
          <div className="WeatherForecast-temperature"> 4° 1°</div>
        </div>
      </div>
    </div>
  );
}
