import React, { useState } from "react";

export default function Units(props) {
    const [tempunit,setTempunit]=useState("celsius");

    function farh(){
        return (props.celsius*9/5)+32
    }

    function showFarh(event){
        event.preventDefault();
        setTempunit("fahrenheit");
    }

    function showCelsius(event){
        event.preventDefault();
        setTempunit("celsius");
    }

    if (tempunit==="celsius"){
         return (
           <div>
             <div className="currentTemp">
               {Math.round(props.celsius)}
               <span className="units">° C | <a href="/" onClick={showFarh}> F </a></span>
             </div>
           </div>
         );
    }
    else {
        return (
          <div>
            <div className="currentTemp">
              {Math.round(farh())}
              <span className="units">
                °
                <a href="/" onClick={showCelsius}>
                  C
                </a>
                | F
              </span>
            </div>
          </div>
        );
    }
  
}
