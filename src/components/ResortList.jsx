import '../App.css';
import Resort from "./Resort";
import React from "react";



function ResortList() {
  return (


   <div className="resort-list">
     <div className="resort-row"> 
      <Resort
        resort="Chamofrfnix"
        snow="10 cm" vfvf
        status="okay"
        sky="blue"
        img="../../images/chamonix.jpeg"
         />
        
      
        
      <Resort
        resort="Sunshinvcdvfvfvde"
        snow="10 cm" 
        status="okay"
        sky="blue" />

      <Resort
        resort="Panarama "
        snow="10 cm" 
        status="okay" />
      </div>

      <div className="resort-row">
      <Resort
        resort="Revelstoke "
        snow="10 cm" 
        status="okay" />

      <Resort
        resort="Kicking Horse "
        snow="10 cm"
        status="okay"
        sky="blue" />
      
      <Resort
        resort="Fernie "
        snow="10 cm" 
        status="okay"
        sky="blue" />
    </div>

    <div className="resort-row">
      <Resort
        resort="Big White "
        snow="10 cm"
        status="okay"
        sky="blue" />

      <Resort
        resort="Red "
        snow="10 cm"
        status="okay" />
      
      <Resort
        resort="WhiteWater "
        snow="10 cm" 
        status="okay"
        sky="blue" />
    </div>

    <div className="resort-row">
      <Resort
        resort="Sun Peaks "
        snow="10 cm" 
        status="okay"
        sky="blue" />

      <Resort
        resort="Whistler "
        snow="10 cm" 
        status="okay"
        sky="blue" />
      
      <Resort
        resort="Powder King"
        snow="10 cm" 
        status="okay"
        sky="blue" /> 
    </div>
   </div>

  )
}

export default ResortList;
