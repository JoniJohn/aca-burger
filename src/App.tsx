import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import  Space  from "./helper_components/Spacer";

import BaseBread from "./components/BaseBread";
import TopBread from "./components/TopBread";
import Tomato from "./components/Tomato";
import Meat from "./components/Meat";
import Lattice from "./components/Lattice";

function App() {
  return (
    <div className="container">
      <Space></Space>
      <div className="card">
        <div className='card-body'>
          <h1>ACA Burger 🍔</h1>
        </div>
      </div>
      <Space></Space>
      <div className='card'>
        <div className='card-body'>
          <h4>Choose Topings</h4>
        </div>
      </div>
      <Space></Space>
      <div className='card'>
        <div className='card-body'>
          <TopBread></TopBread>
          <Lattice></Lattice>
          <Tomato></Tomato>
          <Meat></Meat>
          <BaseBread></BaseBread>
        </div>
      </div>
    </div>
  );
}

export default App;
