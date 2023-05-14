import React from "react";
export default function FormattedDate(props){
    
        let Days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day=Days[props.date.getDay()];
    let hour=props.date.getHours();
    let minute=props.date.getMinutes();
    if (minute<10){
        minute=`0${minute}`;
    }
        if(hour<10){
            hour=`0${hour}`;
        }
   
    return (
    <div>
        {day} {hour}:{minute}
        
        </div>);
    
}