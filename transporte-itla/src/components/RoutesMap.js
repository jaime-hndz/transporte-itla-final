import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import * as L from "leaflet";
import { useMap } from "react-leaflet";
import { WeekSchedule } from "../data/ScheduleData";
import { Button } from "@mui/material";

const colorCustomMarker = (color='blue')=>{
   return new L.Icon({
        iconUrl:
          "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-"+color+".png",
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      })
}

export const RoutesMap = () => {
  const itla = [18.45131484797611, -69.66274166572548];
  const [ver, setVer] = useState(false);
  

  function LocationMarker({ ver = false }) {
    const [position, setPosition] = useState(null);

    const map = useMap();

    const ubicacion = () => {
      map.locate().on("locationfound", function (e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
        const radius = e.accuracy;
        const circle = L.circle(e.latlng, radius-500);
        circle.setStyle({color: 'gray'})
        circle.addTo(map);
        // setBbox(e.bounds.toBBoxString().split(","));
      });

      if (map) {
        const legend = L.control({ position: "bottomleft" });
  
        legend.onAdd = () => {
          const div = L.DomUtil.create("div", "info legend");
          div.setAttribute('class', 'map-legend')
          div.innerHTML =
            `<ul>
                <li>ITLA</li>
                ${WeekSchedule.map((ruta) =>{
                    return `<li>Ruta ${ruta.title}</li>
                            <li>Parada ${ruta.title}</li>`
                })}
                <li>Tu ubicacion</li>
            <ul>`
          return div;
        };
  
        legend.addTo(map);
      }
    };

    useEffect(() => {
      if (ver) {
        ubicacion();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ver]);

    return position === null ? null : (
      <Marker position={position} icon={colorCustomMarker('grey')}>
        <Popup>Estas aquí</Popup>
      </Marker>
    );
  }

  return (
    <div>
        <div style={{display:'flex'}}>
      <Button onClick={() => setVer(true)}>Ver tu ubicacion en el mapa</Button>
        </div>
            
      <MapContainer className="leaflet-container" center={itla} zoom={15}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>  | <a target="blank" href="https://www.google.com/maps/d/u/2/viewer?mid=10bNTYESub5N0jc6x7kYPiUkrKL2ypCAX&ll=18.462327684817264%2C-69.8181437515895&z=13">Ver en google maps</a> '
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker ver={ver} />
        <Marker position={itla} icon={colorCustomMarker('black')}>
          <Popup>Instituto Tecnológico de Las Américas</Popup>
        </Marker>
        {WeekSchedule.map((ruta, i) => (
          <>
            <Polyline
              key={i}
              positions={[ruta.paradas.map((parada) => parada.ubicacion)]}
              color={ruta.color}
            />


            {ruta.paradas.map((parada,i) => {

                if(i !== ruta.paradas.length -1){
                    return (
                        <Marker
                            key={i}
                            icon={colorCustomMarker(ruta.color)}
                            position={parada.ubicacion}
                        >
                            <Popup>{parada.title} </Popup>
                        </Marker>
                        );
                }else{
                    return null
                }

            })}
          </>
        ))}
      </MapContainer>
    </div>
  );
};
