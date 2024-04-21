import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { RMap, ROSM, RLayerVector } from 'rlayers';
import { fromLonLat } from 'ol/proj';
import GPX from 'ol/format/GPX';
import { Style, Stroke, Fill } from 'ol/style';
import 'ol/ol.css';

export default function FeaturesWithGPX() {
  const [flow, setFlow] = useState([]);
  const [gpxFeatures, setGpxFeatures] = useState([]);
  const [fileName, setFileName] = useState('No file chosen');

  const handleFileUpload = useCallback((event) => {
    const file = event.target.files[0];
    if (file && (file.name.endsWith('.gpx'))) {
      setFileName(file.name);
      setFlow((currentFlow) => [...currentFlow, `Selected file - ${file.name}`]);
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const gpxFormat = new GPX();
          const features = gpxFormat.readFeatures(e.target.result, {
            dataProjection: 'EPSG:4326', // GPX is typically in WGS84
            featureProjection: 'EPSG:3857' // Assuming the map projection is Web Mercator
          });
          setGpxFeatures(features);
          setFlow((currentFlow) => [...currentFlow, `Loaded GPX file - ${file.name}`]);
        } catch (err) {
          console.error('Error reading GPX:', err);
          setFileName('Error reading GPX file');
          setFlow((currentFlow) => [...currentFlow, 'Error reading GPX file']);
        }
      };
      reader.readAsText(file);
    } else {
      setFileName('Please upload a valid .gpx file');
      setFlow((currentFlow) => [...currentFlow, 'No valid file chosen']);
    }
  }, []);

  return (
    <div>
      <h1 className='text-4xl font-bold uppercase text-center text-accent mt-16 mb-8'>Map with GPX Data</h1>

      <RMap
        className="example-map"
        width={"100%"}
        height={"60vh"}
        initial={{ center: fromLonLat([0, 0]), zoom: 2 }}
      >
        <ROSM />
        {gpxFeatures.length > 0 && (
          <RLayerVector
            zIndex={10}
            features={gpxFeatures}
            style={new Style({
              stroke: new Stroke({
                color: '#ff3333',
                width: 2
              }),
              fill: new Fill({
                color: '#ffcccc'
              })
            })}
          />
        )}
      </RMap>

      <div className="mx-0 mt-0 mb-3 p-1 w-full jumbotron shadow example-list">
        <p>Your actions:</p>
        <ul className="list-disc list-inside">
          {flow.map((action, index) => (
            <li key={index}>{action}</li>
          ))}
        </ul>
      </div>
      <div className='w-80 mx-auto flex flex-col lg:flex-row items-center justify-center gap-6 mt-10 border-2 border-accent rounded-xl p-4'>
        <span className='text-lg font-semibold'>{fileName}</span>
        <input
          type="file"
          id="gpx-file"
          name="gpx-file"
          onChange={handleFileUpload}
          accept=".gpx"
          className="hidden"
        />
        <label htmlFor="gpx-file" className="flex items-center btn btn-accent cursor-pointer">
          Choose File
        </label>
      </div>
      <div className="flex items-center justify-center">
        <Link to="/"><button className="btn btn-accent my-8">Go Back</button></Link>
      </div>
    </div>
  );
}
