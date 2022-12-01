import React, { useState } from "react";
import axios from 'axios';




export default function Checking() {

  const api = {
    key:"a8e605b668762cfa3c354420d0355cc0",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  const api2 = {
    id: "1c24c23e",
    key: "b1690db775c647ab7400bbcac77a483a",
    base:  "http://api.weatherunlocked.com/" 
  }


  const [place, setPlace] = useState("")

  let checkUrl = () => {
    fetch(`${api.base}weather?q=Calgary&units=metric&APPID=${api.key}`)
    .then((res) => res.json())
    .then((result) => {  

    
    console.log("welcome", result)
  }
  )
  }

  let checkUrl2 = () => {
    fetch("http://api.weatherunlocked.com/api/resortforecast/999001?app_id=1c24c23e&app_key=b1690db775c647ab7400bbcac77a483a")
    .then((res) => res.json())
    .then((result2) => {  

    
    console.log("welcome", result2)
  }
  )
  }


  return (
    <div>
    <button onClick={checkUrl}>Here</button>
    <button onClick={checkUrl2}>Here2</button>

    {place}
    </div>
  )

};



