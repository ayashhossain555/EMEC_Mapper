import React from 'react';
import { NavLink } from "react-router-dom";
import banner from '/banner.png';
const Hero = () => {
    return (
        <div>
            <div class="hero h-[60vh] rounded-xl my-8" style={{backgroundImage: `url(${banner})`}}>
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold uppercase leading-snug">Welcome to<br /><span className='text-accent'>EMEC Mapper</span></h1>
                    <p class="mb-5">Explore the world at your fingertips with our intuitive mapping tools. Connect, create, and collaborate on geospatial projects, empowering your decisions with real-time data.</p>
                    <div className="drawer drawer-end">
                        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                        <NavLink to="/signup"><label htmlFor="my-drawer-4" className="drawer-button btn text-lg font-semibold btn-accent">Sign Up</label></NavLink>
                        </div> 
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                            <div>
                                <h1 className='text-2xl font-semibold uppercase text-start text-accent mt-10 mb-6'>Explore Our Features!</h1>
                                <div className='flex flex-col items-start gap-6 w-full'>
                                    <NavLink to="/geomap"><button className="btn btn-accent">Geo Static Map</button></NavLink>
                                    <NavLink to="/webgl"><button className="btn btn-accent">WebGL Multilayer Map</button></NavLink>
                                    <NavLink to="/infographics"><button className="btn btn-accent">Infographics Map</button></NavLink>
                                    <NavLink to="/wmts"><button className="btn btn-accent">WMTS Map</button></NavLink>
                                    <NavLink to="/vector"><button className="btn btn-accent">Vector Map</button></NavLink>
                                </div>
                            </div>
                            <div>
                                <h1 className='text-2xl font-semibold uppercase text-start text-accent mt-10 mb-6'>Upload your Data!</h1>
                                <div className='flex flex-col items-start gap-6'>
                                    <NavLink to="/geojson"><button className="btn btn-accent">Map with GeoJSON Data</button></NavLink>
                                    <NavLink to="/kml"><button className="btn btn-accent">Map with KML Data</button></NavLink>
                                    <NavLink to="/gpx"><button className="btn btn-accent">Map with GPX Data</button></NavLink>
                                    <NavLink to="/topojson"><button className="btn btn-accent">Map with TopoJSON Data</button></NavLink>
                                    <NavLink to="/clustermap"><button className="btn btn-accent">Clustered Earthquack Map</button></NavLink>
                                </div>
                            </div>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;