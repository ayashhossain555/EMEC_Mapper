import React from "react";
import { Link } from "react-router-dom";

import { get } from "ol/proj";
import { getCenter } from "ol/extent";
import "ol/ol.css";

import { RMap, RLayerImage, RLayerGraticule, RStyle } from "rlayers";

export default function Simple(): JSX.Element {
  const proj = get("EPSG:4326");
  const extent = proj.getWorldExtent();
  const center = getCenter(extent);
  const [graticule, setGraticule] = React.useState<boolean>(true);
  const [labels, setLabels] = React.useState<boolean>(false);
  const [space, setSpace] = React.useState<boolean>(true);
  const style = RStyle.useRStyle();
  const lonSpace = React.useCallback(
    (lon: number) => ((lon + 360) % 360).toLocaleString() + "°",
    []
  );
  const lonGeo = React.useCallback(
    (lon: number) => lon.toLocaleString() + "°",
    []
  );
  return (
    <div className="flex flex-col items-center justify-center">
        <h1 className='font-bold text-4xl text-center uppercase text-accent mt-16 mb-8'>GEO Static Map</h1>
        <React.Fragment>
            <div className="flex flex-col lg:flex-row">
                <button
                    className="btn btn-accent m-2"
                    onClick={() => setGraticule((graticule) => !graticule)}
                >
                    Click here to {graticule ? "hide" : "show"} graticule
                </button>
                <button
                    className="btn btn-accent m-2"
                    onClick={() => setLabels((labels) => !labels)}
                >
                    Click here to {labels ? "hide" : "show"} labels
                </button>
                <button
                    className="btn btn-accent m-2"
                    onClick={() => setSpace((space) => !space)}
                >
                    Click here to use {space ? "geographical" : "space"} longitude
                </button>
            </div>
            <RStyle.RStyle ref={style}>
                <RStyle.RStroke color="red" width={4} />
                <RStyle.RText text="" scale={2} offsetY={-10} offsetX={-10}>
                <RStyle.RStroke color="green" width={2} />
                <RStyle.RFill color="black" />
                </RStyle.RText>
            </RStyle.RStyle>
            <RMap
                width={"100%"}
                height={"60vh"}
                initial={{ center: center, zoom: 1 }}
                projection={proj}
                extent={extent}
            >
                <RLayerImage
                url={
                    "https://upload.wikimedia.org/wikipedia/commons/1/17/Plate_Carr%C3%A9e_with_Tissot%27s_Indicatrices_of_Distortion.svg"
                }
                extent={extent}
                />
                {/* RLayerGraticule does not support inline styles nor dynamically updating styles */}
                <RLayerGraticule
                visible={graticule}
                showLabels={labels}
                strokeStyle={style}
                latLabelStyle={style}
                lonLabelStyle={style}
                lonLabelFormatter={space ? lonSpace : lonGeo}
                />
            </RMap>
        </React.Fragment>
        <Link to="/"><button className="btn btn-accent my-8">Go Back</button></Link>
    </div>
  );
}