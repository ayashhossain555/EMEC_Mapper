import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { RMap, ROSM, RLayerVector } from 'rlayers';
import { fromLonLat } from 'ol/proj';
import KML from 'ol/format/KML';
import { Style } from 'ol/style';
import 'ol/ol.css';

export default function FeaturesWithKML() {
  const [flow, setFlow] = useState([]);
  const [kmlFeatures, setKmlFeatures] = useState([]);
  const [fileName, setFileName] = useState('No file chosen');

  const handleFileUpload = useCallback((event) => {
    const file = event.target.files[0];
    if (file && file.name.endsWith('.kml')) {
      setFileName(file.name);
      setFlow((currentFlow) => [...currentFlow, `Selected file - ${file.name}`]);
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const kmlFormat = new KML();
          const features = kmlFormat.readFeatures(e.target.result, {
            dataProjection: 'EPSG:4326',
            featureProjection: 'EPSG:3857',
          });
          setKmlFeatures(features);
          setFlow((currentFlow) => [...currentFlow, `Loaded KML file - ${file.name}`]);
        } catch (err) {
          console.error('Error reading KML:', err);
          setFileName('Error reading KML file');
          setFlow((currentFlow) => [...currentFlow, 'Error reading KML file']);
        }
      };
      reader.readAsText(file);
    } else {
      setFileName('Please upload a valid .kml file');
      setFlow((currentFlow) => [...currentFlow, 'No valid file chosen']);
    }
  }, []);

  return (
    <div>
      <h1 className='text-4xl font-bold uppercase text-center text-accent mt-16 mb-8'>Map with KML Data</h1>

      <RMap
        className="example-map"
        width={"100%"}
        height={"60vh"}
        initial={{ center: fromLonLat([0, 0]), zoom: 2 }}
      >
        <ROSM />
        {kmlFeatures.length > 0 && (
          <RLayerVector
            zIndex={10}
            features={kmlFeatures}
            style={new Style({/* Style configuration if needed */})}
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
          id="kml-file"
          name="kml-file"
          onChange={handleFileUpload}
          accept=".kml"
          className="hidden"
        />
        <label htmlFor="kml-file" className="flex items-center btn btn-accent cursor-pointer">
          Choose File
        </label>
      </div>
      <div className="flex items-center justify-center">
        <Link to="/"><button className="btn btn-accent my-8">Go Back</button></Link>
      </div>
    </div>
  );
}
