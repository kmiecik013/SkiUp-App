import React, { useState } from "react";
import axios from 'axios';




export default function Checking() {

  const api = {
    key:"a8e605b668762cfa3c354420d0355cc0",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  const api2 = {
    id: "1c24c23e",
    key: "b46394fe73e54cc0e67793f8ffae7901e97f06459e8944dcc600d473a9bc826e",
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
    fetch(`${api2.base}api/resortforecast/604038?app_id=${api2.id}&app_key=${api2.key}`)
    .then((res) => res.json())
    .then((result) => {  

    
    console.log("welcome", result)
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



