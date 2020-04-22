import React from "react";

export default function CityWeatherInfo(props) {
var str, color;
    if(props.uv <= 2){
        str = "niskie"
        color = "green"
    }else if(props.uv <= 5){
        str = "średnie"
        color = "yellow"
    }else if(props.uv <= 7){
        str = "wysokie"
        color = "orange"
    }else if(props.uv <= 10){
        str = "bardzo wyskie"
        color = "red"
    }else{
        str = "ekstremalnie wysokie"
        color = "purple"
    }

  return (
    <div style={{color: color}}>
        {str}
    </div>
  )
}
