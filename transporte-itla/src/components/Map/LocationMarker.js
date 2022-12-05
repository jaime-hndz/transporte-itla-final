import React, { useState, useEffect } from "react";
import {
  Marker,
  Popup,
} from "react-leaflet";
import * as L from "leaflet";
import { useMap } from "react-leaflet";
import { CustomColorMarker } from "./CustomColorMarker";

function LocationMarker({ ver = false }) {
    const [position, setPosition] = useState(null);

    const map = useMap();

    const ubicacion = () => {
      map.locate().on("locationfound", function (e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, 15);
        const radius = e.accuracy;
        const circle = L.circle(e.latlng, radius-500);
        circle.setStyle({color: 'gray'})
        circle.addTo(map);
        // setBbox(e.bounds.toBBoxString().split(","));
      });


    };

    useEffect(() => {
      if (ver) {
        ubicacion();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ver]);

    return position === null ? null : (
      <Marker position={position} icon={CustomColorMarker('grey')}>
        <Popup>Estas aquí</Popup>
      </Marker>
    );
  }

export default LocationMarker;
