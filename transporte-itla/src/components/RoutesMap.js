import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import { WeekSchedule } from "../data/ScheduleData";
import { Button } from "@mui/material";
import Legend from "./Legend";
import { CustomColorMarker } from "./CustomColorMarker";
import LocationMarker from "./LocationMarker";


export const RoutesMap = () => {
  const itla = [18.45131484797611, -69.66274166572548];
  const [ver, setVer] = useState(false);
  

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
        <Legend ver={ver} />
        <Marker position={itla} icon={CustomColorMarker('black')}>
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
                            icon={CustomColorMarker(ruta.color)}
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
