import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { RMap, ROSM, RLayerVector } from 'rlayers';
import { fromLonLat } from 'ol/proj';
import GeoJSON from 'ol/format/GeoJSON';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import 'ol/ol.css';

export default function Features() {
  const [flow, setFlow] = useState([]);
  const [geojsonFeatures, setGeojsonFeatures] = useState([]);
  const [fileName, setFileName] = useState('No file chosen');

  const handleFileUpload = useCallback((event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setFlow((currentFlow) => [...currentFlow, `Selected file - ${file.name}`]);
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const json = JSON.parse(e.target.result);
          const features = new GeoJSON({
            dataProjection: 'EPSG:4326',
            featureProjection: 'EPSG:3857',
          }).readFeatures(json);
          setGeojsonFeatures(features);
          setFlow((currentFlow) => [...currentFlow, `Loaded file - ${file.name}`]);
        } catch (err) {
          console.error('Error reading GeoJSON:', err);
          setFileName('Error reading file');
          setFlow((currentFlow) => [...currentFlow, 'Error reading file']);
        }
      };
      reader.readAsText(file);
    } else {
      setFileName('No file chosen');
      setFlow((currentFlow) => [...currentFlow, 'No file chosen']);
    }
  }, []);

  // The onPointerEnter handler similar to the rlayers example
  const onFeatureEnter = useCallback((event) => {
    const featureName = event.target.get('nom') || 'an area';
    setFlow((currentFlow) => [...currentFlow, `Entering ${featureName}`]);
  }, []);

  return (
    <div>
      <h1 className='text-4xl font-bold uppercase text-center text-accent mt-16 mb-8'>Map with GeoJSON Data</h1>

      <RMap
        className="example-map"
        width={"100%"}
        height={"60vh"}
        initial={{ center: fromLonLat([2.364, 48.82]), zoom: 11 }}
      >
        <ROSM />
        {geojsonFeatures.length > 0 && (
          <RLayerVector
            zIndex={10}
            features={geojsonFeatures}
            style={new Style({
              image: new CircleStyle({
                radius: 5,
                fill: new Fill({ color: 'blue' }),
                stroke: new Stroke({
                  color: 'white',
                  width: 1.5,
                }),
              }),
              fill: new Fill({
                color: 'rgba(0, 0, 255, 0.1)',
              }),
              stroke: new Stroke({
                color: 'blue',
                width: 2,
              }),
            })}
            onPointerEnter={onFeatureEnter}
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
          id="geojson-file"
          name="geojson-file"
          onChange={handleFileUpload}
          accept=".geojson,.json"
          className="hidden"
        />
        <label htmlFor="geojson-file" className="flex items-center btn btn-accent cursor-pointer">
          Choose File
        </label>
      </div>

      <div className="flex items-center justify-center">
        <Link to="/"><button className="btn btn-accent my-8">Go Back</button></Link>
      </div>
    </div>
  );
}
