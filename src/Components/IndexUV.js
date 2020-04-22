import React, {useEffect, useState} from "react";

export default function IndexUv(props) {
const [str, setStr] = useState("");
const [color, setColor] = useState("");

useEffect(() => {
    if(props.uv.value <= 2){
        setStr("niskie");
        setColor("lawngreen");
    }else if(props.uv.value <= 5){
        setStr("średnie");
        setColor("yellow");
    }else if(props.uv.value <= 7){
        setStr("wysokie");
        setColor("#ffd000");
    }else if(props.uv.value <= 10){
        setStr("bardzo wyskie");
        setColor("red");
    }else{
        setStr("ekstremalnie wysokie");
        setColor("purple");
    }
}, [props.uv])
    
  return (
    <div style={{color: color}}>
        {str}
    </div>
  )
}