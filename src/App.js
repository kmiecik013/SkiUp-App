
import './App.css';
import React, { useState } from "react";
import ResortList from './components/ResortList';
import Header from './components/Header';
import Footer from './components/Footer';
import Checking from './components/checking';
import axios from 'axios';


export default function App() {



  return (
    <div>   
      <Header />
      

      <div className ="ski-content"><ResortList /></div> 
      <Checking />
      <Footer />
    </div>
  )
}

