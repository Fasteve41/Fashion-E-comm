import React, { useContext } from 'react';
import Banner from '../pages/Banner';
import Features from '../pages/Features';
import Off from '../pages/Off';
import Shop from './Shop';


function Rotes() {
  
  return (
    <div>
      <Banner/>
      <Features/>
      <Shop/>
      <Off/>
    </div>
  )
}

export default Rotes
