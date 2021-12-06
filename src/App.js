import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a
            href="https://github.com/nathaliebru/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source coded
          </a>{" "}
          by Nathalie Bruinhof
        </footer>
      </div>
    </div>
  );
}
