import React, { useState, useEffect } from "react";
import "../CSS/search.css";
import axios from "axios";
import CityWeatherInfo from "./CityWeatherInfo";

export default function ShowWeather() {
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState({});
  const [uv, setUv] = useState({});
  const [city, setCity] = useState("");
  const [oldCity, setOldCity] = useState("");
  const [hoverS, setHoverS] = useState(false);
  const apiOWM = "http://api.openweathermap.org/data/2.5/weather?q=";
  const apiForecast = "http://api.openweathermap.org/data/2.5/forecast?q=";
  const apiKey =
    ",pl&units=metric&appid=109879588a9b5658c2a7820a546cb0ca&cnt=3";
  const apiUV =
    "http://api.openweathermap.org/data/2.5/uvi?appid=109879588a9b5658c2a7820a546cb0ca&lat=";

   async function handleButtonClick() {
    if (oldCity !== city) {
      await axios.get(apiOWM + city + apiKey).then((res) => {
        const data = res.data;
        console.log("Data ",data);
        setWeather(data);
        setOldCity(city);
        axios
          .get(apiUV + data.coord.lat + "&lon=" + data.coord.lon)
          .then((res) => {
            const data = res.data;
            setUv(data);
            console.log("UV ",data);
            console.log("UV ",data.value);
          });
        axios
          .get(apiForecast + city + apiKey)
          .then((res) => {
            const data = res.data;
            setForecast(data);
            console.log("Forecast ",data);
          });
      });
    }
  }
  
  function handleChangeCity(e) {
    setCity(e.target.value);
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleButtonClick();
    }
  }

  function barFocus() {
    setHoverS(true);
  }

  function barBlur() {
    setHoverS(false);
  }

  return (
    <center>
      <div className="main">
        <input
          className={hoverS ? "search-input-hover" : "search-input"}
          type="text"
          onFocus={barFocus}
          onBlur={barBlur}
          onChange={handleChangeCity}
          onKeyPress={handleKeyPress}
        />
        <button
          className={hoverS ? "search-button-hover" : "search-button"}
          onFocus={barFocus}
          onBlur={barBlur}
          onClick={handleButtonClick}
        >
          szukaj
        </button>
      </div>
      <div>
        <CityWeatherInfo uv={uv} city={city} weather={weather} />
      </div>
    </center>
  );
}
