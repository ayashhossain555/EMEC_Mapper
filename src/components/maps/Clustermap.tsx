import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fromLonLat } from 'ol/proj';
import GeoJSON from 'ol/format/GeoJSON';
import { Circle as CircleStyle, Fill, Stroke, Text, Style } from 'ol/style';
import { RMap, RLayerCluster, RLayerTile } from 'rlayers';

const Cluster = () => {
  const [distance, setDistance] = useState(40);
  const [selected, setSelected] = useState('Click a cluster for details');
  const [features, setFeatures] = useState(null);
  const [fileName, setFileName] = useState('');
  const defaultDataUrl = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson';

  useEffect(() => {
    fetch(defaultDataUrl)
      .then(response => response.json())
      .then(data => {
        const reader = new GeoJSON({ featureProjection: 'EPSG:3857' });
        setFeatures(reader.readFeatures(data));
      })
      .catch(error => console.error('Error fetching earthquake data:', error));
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file ? file.name : 'No file chosen');
    if (file && (file.name.endsWith('.geojson') || file.name.endsWith('.json'))) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result);
          const reader = new GeoJSON({ featureProjection: 'EPSG:3857' });
          const uploadedFeatures = reader.readFeatures(data);
          setFeatures(uploadedFeatures);
        } catch (error) {
          console.error('Error reading the uploaded GeoJSON:', error);
          alert('Error reading the uploaded GeoJSON file');
        }
      };
      reader.readAsText(file);
    }
  };

  const colorBlob = useCallback((size) => {
    return `rgba(${[255, 153, 0, Math.min(0.8, 0.4 + Math.log(size / 10) / 20)].join()})`;
  }, []);

  const radiusStar = useCallback((feature) => {
    return Math.round(5 * (parseFloat(feature.get('mag')) - 2.5));
  }, []);

  const styleFunction = useCallback((feature) => {
    const size = feature.get('features').length;
    return new Style({
      image: new CircleStyle({
        radius: 10 + size,
        fill: new Fill({ color: colorBlob(size) }),
      }),
      text: new Text({
        text: size.toString(),
        fill: new Fill({ color: '#fff' }),
        stroke: new Stroke({ color: 'rgba(0, 0, 0, 0.6)', width: 3 }),
      }),
    });
  }, [colorBlob]);

  return (
    <>
      <h1 className='text-4xl font-bold uppercase text-center text-accent mt-16 mb-8'>Earthquack Cluster Map</h1>
      <div className="flex items-center justify-center my-4">
        <span className="text-sm font-semibold">{fileName}</span>
      </div>
      <RMap className="w-full h-60vh" width={"100%"} height={"60vh"} initial={{ center: fromLonLat([0, 0]), zoom: 2 }}>
        <RLayerTile url="https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {features && (
          <RLayerCluster
            distance={distance}
            features={features}
            style={styleFunction}
            onClick={(e) => {
              const clusterFeatures = e.target.get('features') ?? [];
              setSelected(`${clusterFeatures.length} earthquakes in this location, magnitudes are ${clusterFeatures.map(eq => eq.get('mag')).join(', ')}`);
            }}
          />
        )}
      </RMap>
      <div className="flex items-center justify-center my-4">
        <label htmlFor="distance" className="mr-2">Clustering distance:</label>
        <input
          type="range"
          id="distance"
          className="w-full"
          min="5"
          max="80"
          value={distance}
          onChange={(e) => setDistance(parseInt(e.currentTarget.value, 10))}
        />
      </div>
      <div className="text-center">{selected}</div>
      <input
          type="file"
          id="geojson-file"
          name="geojson-file"
          onChange={handleFileChange}
          accept=".geojson,.json"
          className="hidden"
        />
        <div className='w-80 mx-auto flex flex-col lg:flex-row items-center justify-center gap-6 mt-10 border-2 border-accent rounded-xl p-4'>
            <h1 className='text-lg font-semibold'>Upload Your Data</h1>
            <label htmlFor="geojson-file" className="btn btn-accent cursor-pointer">
            Choose File
            </label>
        </div>
      <div className="flex items-center justify-center">
        <Link to="/">
          <button className="btn btn-accent my-8">Go Back</button>
        </Link>
      </div>
    </>
  );
};

export default Cluster;
