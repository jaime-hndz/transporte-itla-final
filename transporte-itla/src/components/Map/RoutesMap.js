import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import { WeekSchedule } from "../../data/ScheduleData";
import { Button } from "@mui/material";
import Legend from "./Legend";
import { CustomColorMarker } from "./CustomColorMarker";
import LocationMarker from "./LocationMarker";


export const RoutesMap = () => {
  const itla = [18.45131484797611, -69.66274166572548];
  const [ver, setVer] = useState(false);
  

  return (
    <div>
      <Button style={{fontSize: '10px'}} onClick={() => setVer(true)} size='small'>Ver tu ubicacion en el mapa</Button>      
      <MapContainer className="leaflet-container" center={itla} zoom={11}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>  | <a target="blank" href="https://www.google.com/maps/d/u/2/viewer?mid=10bNTYESub5N0jc6x7kYPiUkrKL2ypCAX&ll=18.462327684817264%2C-69.8181437515895&z=13">Ver en google maps</a> '
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker ver={ver} />
        <Legend handler={setVer} />
        <Marker position={itla} icon={CustomColorMarker('black')}>
          <Popup>Instituto Tecnológico de Las Américas</Popup>
        </Marker>
        {WeekSchedule.map((ruta, i) => (
          <React.Fragment key={i}>
            <Polyline
              
              positions={[ruta.paradas.map((parada) => parada.ubicacion)]}
              color={ruta.color}
            />


            {ruta.paradas.filter(parada => parada.importante === true).map((parada,i) => {
                    return (
                        <Marker
                            key={i}
                            icon={CustomColorMarker(ruta.color)}
                            position={parada.ubicacion}
                        >
                            <Popup>{parada.title} </Popup>
                        </Marker>
                        );
                


            })}
          </React.Fragment>
        ))}
      </MapContainer>
    </div>
  );
};
