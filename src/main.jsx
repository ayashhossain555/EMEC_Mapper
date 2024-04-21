import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Root from './components/Root';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Geomap from './components/maps/Geomap';
import Webgl from './components/maps/Webgl';
import GeoJson from './components/maps/GeoJson';
import Clustermap from './components/maps/Clustermap';
import Infographic from './components/maps/Infographic';
import Wmts from './components/maps/Wmts';
import VectorTiles from './components/maps/VectorTile';
import KmlFile from './components/maps/KmlFile';
import Gpx from './components/maps/GpxFile';
import TopoJSON from './components/maps/TopoJson';

// npm install topojson-client
// npm install ol-mbtiles
// npm install proj4


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/geomap',
        element: <Geomap></Geomap>
      },
      {
        path: '/webgl',
        element: <Webgl></Webgl>
      },
      {
        path: '/geojson',
        element: <GeoJson></GeoJson>
      },
      {
        path: '/clustermap',
        element: <Clustermap></Clustermap>
      },
      {
        path: '/infographics',
        element: <Infographic></Infographic>
      },
      {
        path: '/wmts',
        element: <Wmts></Wmts>
      },
      {
        path: '/vector',
        element: <VectorTiles></VectorTiles>
      },
      {
        path: '/kml',
        element: <KmlFile></KmlFile>
      },
      {
        path: '/gpx',
        element: <Gpx></Gpx>
      },
      {
        path: '/topojson',
        element: <TopoJSON></TopoJSON>
      },
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
