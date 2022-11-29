
import './App.css';
import React, { useState } from "react";
import ResortList from './components/ResortList';
import Header from './components/Header';
import Footer from './components/Footer';
import Checking from './components/checking';
import axios from 'axios';


export default function App() {

const url = "http://api.openweathermap.org/data/2.5/weather?q=Fernie&APPID=a7a9665aa1abbfd3de98c6c2706e4466"

const url2 = "https://api.weatherunlocked.com/api/current/51.42,116.17?app_id=1c24c23e&app_key=36b68b891fd640ca338c50abeb953566"

const url3 = "https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=a7a9665aa1abbfd3de98c6c2706e4466"

const url4 = "http://api.weatherunlocked.com/api.weatherunlocked.com/api/resortforecast/999001?app_id=1c24c23e&app_key=a7a9665aa1abbfd3de98c6c2706e4466"

const url5 = "http://api.worldweatheronline.com/premium/v1/ski.ashx?key=f1043f572972409699600438221805&q=45.9237,6.8694&format=json"


let [data, setData] = useState("hello");

useState(() => {
  axios
  .get(url)
  .then((response) => setData(response.base));
  console.log(data, "welcome")
}
)


  console.log(url, "url here");
  //console.log(url2, "url2 here");
  //console.log(url3, "url3 here");
  //console.log(url4, "url4 here");
  //console.log(url5, "url5 here");



  return (
    <div>   
      <Header />
  
      {data}
      

      <div className ="ski-content"><ResortList /></div> 
      <Checking />
      <Footer />
    </div>
  )
}

