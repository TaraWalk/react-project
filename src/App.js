import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        Weather App
        <Weather defaultCity="Tokyo" />
        <footer>
          This project was coded by Tara Walker and is {""}
          <a href="https://github.com/TaraWalk/react-project" target="_blank">
            open-sourced on github
          </a>
        </footer>
      </div>
    </div>
  );
}
