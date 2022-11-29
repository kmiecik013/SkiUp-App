import '../styles/resort.css';
import React from "react";

function Resort(props) {
  return (
   <div className="resort-case">

<div className="resort-title">{props.resort} </div>
     <div> {props.snow} </div>
      <div>{props.status}</div>
      <div>{props.condition}</div>
      <div>{props.sky}</div>
      <div className="card-image">{props.img}</div>
       </div>

  )
}

export default Resort;
