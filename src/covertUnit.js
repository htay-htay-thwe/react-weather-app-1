import React, { useState } from "react";
export default function CovertUnit(props){

let [unit,setUnit]=useState("celsius");
function showfahrenheit(event){
event.preventDefault();
setUnit("fahrnheit");
}
function celsiusTemperature(event){
    event.preventDefault();
    setUnit("celsius");
}

if(unit === "celsius"){
    return (
      <span className="covertUnit">
        <span className="degree">{props.data}</span>
        <span className="cel">
          °C/{" "}
          <a href="/" onClick={showfahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
}else{
    let fahrenheit=Math.round((props.data * 9)/5 +32);
    return(
 <span className="covertUnit">
   <span className="degree">{fahrenheit}</span>
   <span className="cel">
     {" "}
     <a href="/" onClick={celsiusTemperature}>
       °C
     </a>
     / °F
   </span>
 </span>
    );

}
}