import React, {useEffect, useState} from "react";
import "../CSS/weatherInfo.css";
import cloud from "../Ico/cloud100.png";
import cloudSun from "../Ico/cloud50.png";
import sunny from "../Ico/cloud0.png";

export default function ShowCloudIcon(props) {
const [clouds, setClouds] = useState();

useEffect(() => {
  setClouds(props.clouds);  
}, [props.clouds])
    
  return (
    <span className="show-cloud">
              <span>
                {clouds > 70 ? (
                  <img
                    className="cloudy-ico"
                    src={cloud}
                    alt="icon by Icons8"
                  ></img>
                ) : (
                  ""
                )}
                {clouds <= 70 &&
                clouds > 30 ? (
                  <img
                    className="cloudy-ico"
                    src={cloudSun}
                    alt="icon by Icons8"
                  ></img>
                ) : (
                  ""
                )}
                {clouds <= 30 ? (
                  <img
                    className="cloudy-ico"
                    src={sunny}
                    alt="icon by Icons8"
                  ></img>
                ) : (
                  ""
                )}
              </span>
            </span>
  )
}