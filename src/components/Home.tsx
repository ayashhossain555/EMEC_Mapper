import '../App.css';
import { NavLink } from "react-router-dom";


import React from "react";
import { fromLonLat } from "ol/proj";
import "ol/ol.css";

import { RMap, ROSM } from "rlayers";
import Hero from './Hero';
import Contact from './Contact';

const center = fromLonLat([2.364, 48.82]);

export default function Simple(): JSX.Element {
  return (
    <div>
      <Hero></Hero>
      <h1 className='font-bold text-4xl text-center uppercase text-accent mt-16 mb-8'>World Map</h1>
      <RMap width={"100%"} height={"60vh"} initial={{ center: center, zoom: 5 }}>
        <ROSM />
      </RMap>

      <Contact></Contact>
    </div>
  );
}