import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "866a890859532fe4a66540127aac910b";
  let longitute = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitute}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecastDay">Thur</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecastTemperature">
            <span className="WeatherForecastTemperature-Max">13° </span>
            <span className="WeatherForecastTemperature-Min">10° </span>
          </div>
        </div>
      </div>
    </div>
  );
}
