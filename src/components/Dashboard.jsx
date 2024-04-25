import React from 'react';
import '../App.css';
import { NavLink } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <div className='mt-10 p-28 border-2 border-accent rounded-xl'>
                <h1 className='text-2xl font-semibold uppercase text-center text-accent mb-4'>Explore Our Tools!</h1>
                <p className='text-center w-2/3 mx-auto mb-8'>Explore our suite of mapping tools, each designed for specific needs. From Geo Static Maps to dynamic WebGL layers and detailed Vector Maps, start exploring today to enhance your data visualization capabilities.</p>
                <div className='flex flex-col lg:flex-row items-center justify-center gap-6'>
                    <NavLink to="/geomap"><button className="btn btn-accent">Geo Static Map</button></NavLink>
                    <NavLink to="/webgl"><button className="btn btn-accent">WebGL Multilayer Map</button></NavLink>
                    <NavLink to="/infographics"><button className="btn btn-accent">Infographics Map</button></NavLink>
                    <NavLink to="/wmts"><button className="btn btn-accent">WMTS Map</button></NavLink>
                    <NavLink to="/vector"><button className="btn btn-accent">Vector Map</button></NavLink>
                </div>
            </div>
            <div className='mt-10 p-28 border-2 border-accent rounded-xl'>
                <h1 className='text-2xl font-semibold uppercase text-center text-accent mb-4'>Upload your Data!</h1>
                <p className='text-center w-2/3 mx-auto mb-8'>Upload and visualize your geographic data effortlessly. Choose from formats like GeoJSON, KML, GPX, and TopoJSON to bring your maps to life. Whether you’re plotting routes or complex earthquake clusters, our tools are designed for clarity and precision. Start mapping now!</p>
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
};

export default Dashboard;