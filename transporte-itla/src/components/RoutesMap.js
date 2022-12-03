import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export const RoutesMap = () => {
  const position = [18.45131484797611, -69.66274166572548];
  return (
    <div>
      <MapContainer  className="leaflet-container" center={position} zoom={15}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
