import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import * as L from "leaflet";

import { WeekSchedule } from "../data/ScheduleData";

export const RoutesMap = () => {
  const position = [18.45131484797611, -69.66274166572548];
  return (
    <div>
      <MapContainer className="leaflet-container" center={position} zoom={15}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>  | <a href="https://www.google.com/maps/d/u/2/viewer?mid=10bNTYESub5N0jc6x7kYPiUkrKL2ypCAX&ll=18.462327684817264%2C-69.8181437515895&z=13">Ver en google maps</a> '
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Instituto Tecnológico de Las Américas</Popup>
        </Marker>
        {WeekSchedule.map((ruta, i) => (
          <>
            <Polyline
              key={i}
              positions={[ruta.paradas.map((parada) => parada.ubicacion)]}
              color={ruta.color}
            />

            {ruta.paradas.map((parada) => (
              <Marker icon={new L.Icon({
                iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-'+ruta.color+'.png',
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
              })} position={parada.ubicacion}>
                <Popup>{parada.title}</Popup>
              </Marker>
            ))}
          </>
        ))}
      </MapContainer>
    </div>
  );
};
