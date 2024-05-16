// components/MapComponent.tsx
import React, { useEffect, useRef, useState } from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { OSM } from "ol/source";
import { Vector as VectorSource } from "ol/source";
import { Point, LineString, Polygon } from "ol/geom";
import { Feature } from "ol";
import { Style, Icon, Stroke, Fill } from "ol/style";
import { Card, IconButton, Box } from "@mui/material";

const MapComponent = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<Map | null>(null);
  const [vectorSource] = useState(new VectorSource());

  useEffect(() => {
    if (mapRef.current) {
      const initialMap = new Map({
        target: mapRef.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          new VectorLayer({
            source: vectorSource,
          }),
        ],
        view: new View({
          center: [-10000000, 5000000],
          zoom: 4,
        }),
      });

      setMap(initialMap);

      return () => {
        if (initialMap) {
          initialMap.setTarget(undefined);
        }
      };
    }
  }, [vectorSource]);

  const addPoint = () => {
    const pointFeature = new Feature({
      geometry: new Point([-10000000, 5000000]),
    });

    pointFeature.setStyle(
      new Style({
        image: new Icon({
          src: "/path/to/icon.png",
          scale: 0.1,
        }),
      })
    );

    vectorSource.addFeature(pointFeature);
  };

  const addLine = () => {
    const lineFeature = new Feature({
      geometry: new LineString([
        [-1e7, 5e6],
        [-5e6, 5e6],
        [0, 5e6],
        [5e6, 5e6],
        [1e7, 5e6],
      ]),
    });

    lineFeature.setStyle(
      new Style({
        stroke: new Stroke({
          color: "#FF0000",
          width: 2,
        }),
      })
    );

    vectorSource.addFeature(lineFeature);
  };

  const addPolygon = () => {
    const polygonFeature = new Feature({
      geometry: new Polygon([
        [
          [-1e7, 5e6],
          [-1e7, 6e6],
          [0, 6e6],
          [1e7, 6e6],
          [1e7, 5e6],
          [-1e7, 5e6],
        ],
      ]),
    });

    polygonFeature.setStyle(
      new Style({
        stroke: new Stroke({
          color: "#0000FF",
          width: 2,
        }),
        fill: new Fill({
          color: "rgba(0, 0, 255, 0.1)",
        }),
      })
    );

    vectorSource.addFeature(polygonFeature);
  };

  const clearFeatures = () => {
    vectorSource.clear();
  };

  return (
    <Card
      sx={{
        p: 1,
        width: "80vw",
        height: "84vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex", mb: 2 }}>
        <IconButton onClick={addPoint}>
          <img src={"/assets/icons/g1.png"} alt="Add Point" />
        </IconButton>
        <IconButton onClick={addLine}>
          <img src={"/assets/icons/g2.png"} alt="Add Line" />
        </IconButton>
        <IconButton onClick={addPolygon}>
          <img src={"/assets/icons/g3.png"} alt="Add Polygon" />
        </IconButton>
        <IconButton onClick={clearFeatures}>
          <img src={"/assets/icons/Delete.png"} alt="Delete Features" />
        </IconButton>
      </Box>
      <div
        ref={mapRef}
        style={{ width: "100%", height: "100%", borderRadius: 10 }}
      ></div>
    </Card>
  );
};

export default MapComponent;
