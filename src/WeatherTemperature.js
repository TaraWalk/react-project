import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");

  function ShowFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function ShowCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  function fahrenheit() {
    return (props.celcius * 9) / 5 + 32;
  }

  if (unit === "celcius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celcius)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={ShowFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="unit">
          <a href="/" onClick={ShowCelcius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
