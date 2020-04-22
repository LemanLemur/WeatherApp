import React, { useEffect, useState } from "react";
import sun from "../Ico/sun.png";
import "../CSS/weatherInfo.css";
import IndexUV from "./IndexUV";
import ShowCloudIcon from "./ShowCloudIcon";

export default function CityWeatherInfo(props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  function handleResize() {
    if (window.innerWidth <= 530) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }

  return (
    <div>
      {Object.keys(props.weather).includes("main") ? (
        <div className="paper component-text">
          {isMobile ? (
            <div className="col">
              <div>
                <div className="city">{props.weather.name}</div>
                <div className="lat-lon">
                  <div>długość i szerokość geograficzna</div>
                  <div className="ML10">
                    {props.weather.coord.lon + " / " + props.weather.coord.lat}
                  </div>
                </div>
              </div>
              <div className="temp">
                {Math.floor(props.weather.main.temp) + "°C"}
              </div>
              <div className="temp-feel">
                <span>odczuwalna</span>
                <span className="ML10">
                  {Math.floor(props.weather.main.feels_like) + "°C"}
                </span>
              </div>
            </div>
          ) : (
            <div className="col">
              <div className="row">
                <div className="city">{props.weather.name}</div>
                <div className="temp">
                  {Math.floor(props.weather.main.temp) + "°C"}
                </div>
              </div>

              <div className="row">
                <div className="lat-lon">
                  <div>długość i szerokość geograficzna</div>
                  <div className="ML10">
                    {props.weather.coord.lon + " / " + props.weather.coord.lat}
                  </div>
                </div>
                <div className="temp-feel">
                  <span>odczuwalna</span>
                  <span className="ML10">
                    {Math.floor(props.weather.main.feels_like) + "°C"}
                  </span>
                </div>
              </div>
            </div>
          )}

          {isMobile ? (
            <div className="cloudy-col">
              <div>
          <div className="MLB">Zachmurzenie:{" "}{props.weather.clouds.all + "%"}</div>
              </div>
              <ShowCloudIcon clouds={props.weather.clouds.all} />
            </div>
          ) : (
            <div className="cloudy">
              <div className="row">
                <div className="MLB">Zachmurzenie:</div>
                <div className="MLB">{props.weather.clouds.all + "%"}</div>
              </div>
              <ShowCloudIcon clouds={props.weather.clouds.all} />
            </div>
          )}

          {isMobile ? (
            <div
              className="col flex-sa"
              style={{ margin: "10px", color: "white", fontSize: "18px" }}
            >
              <div>Promieniowanie UV:</div>
              <IndexUV uv={props.uv} />
            </div>
          ) : (
            <div
              className="row flex-sa"
              style={{ margin: "10px", color: "white", fontSize: "18px" }}
            >
              <div>Promieniowanie UV:</div>
              <IndexUV uv={props.uv} />
            </div>
          )}
        </div>
      ) : (
        ""
      )}

      <div className="void">
        {Object.keys(props.weather).includes("main") ? (
          ""
        ) : (
          <div>
            <img src={sun} className="sun" alt="Sun icon icon by Icons8" />
            <p className="welcome-text">Dla jakiego miasta szukasz pogody?</p>
          </div>
        )}
      </div>
    </div>
  );
}
