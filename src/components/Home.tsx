import '../App.css';
import { NavLink } from "react-router-dom";


import React from "react";
import { fromLonLat } from "ol/proj";
import "ol/ol.css";

import { RMap, ROSM } from "rlayers";
import Hero from './Hero';

const center = fromLonLat([2.364, 48.82]);

export default function Simple(): JSX.Element {
  return (
    <div>
      <Hero></Hero>
      <h1 className='font-bold text-4xl text-center uppercase text-accent mt-16 mb-8'>World Map</h1>
      <RMap width={"100%"} height={"60vh"} initial={{ center: center, zoom: 5 }}>
        <ROSM />
      </RMap>

      <div>
        <h1 className='text-2xl font-semibold uppercase text-center text-accent mt-10 mb-6'>Explore More Features!</h1>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-6'>
          <NavLink to="/geomap"><button className="btn btn-accent">Geo Static Map</button></NavLink>
          <NavLink to="/webgl"><button className="btn btn-accent">WebGL Multilayer Map</button></NavLink>
          <NavLink to="/infographics"><button className="btn btn-accent">Infographics Map</button></NavLink>
          <NavLink to="/wmts"><button className="btn btn-accent">WMTS Map</button></NavLink>
          <NavLink to="/vector"><button className="btn btn-accent">Vector Map</button></NavLink>
        </div>
      </div>
      <div>
        <h1 className='text-2xl font-semibold uppercase text-center text-accent mt-10 mb-6'>Upload your Data!</h1>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-6'>
          <NavLink to="/geojson"><button className="btn btn-accent">Map with GeoJSON Data</button></NavLink>
          <NavLink to="/kml"><button className="btn btn-accent">Map with KML Data</button></NavLink>
          <NavLink to="/gpx"><button className="btn btn-accent">Map with GPX Data</button></NavLink>
          <NavLink to="/topojson"><button className="btn btn-accent">Map with TopoJSON Data</button></NavLink>
          <NavLink to="/clustermap"><button className="btn btn-accent">Clustered Earthquack Map</button></NavLink>
        </div>
      </div>
    </div>
  );
}