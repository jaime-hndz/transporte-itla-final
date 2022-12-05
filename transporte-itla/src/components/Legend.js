import { useEffect } from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";
import {WeekSchedule} from '../data/ScheduleData'

const lista = () =>{
    return `
            <div><img class='img-legend' src='https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png' /> ITLA</div>
            ${WeekSchedule.map(
              (ruta) =>
                `<div><img class='img-legend' src='https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${ruta.color}.png' /> Parada ${ruta.title}</div>
                 <div class='ruta-div'><div class='line-legend-container'><div class='line-legend' style='background-color: ${ruta.color}'></div></div> Ruta ${ruta.title}</div>`
            ).join("")}
            <div><img class='img-legend' src='https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-grey.png' /> Tu ubicación (haz click en el botón para ver)</div>`; 
}

function Legend() {

  const map = useMap();
  useEffect(() => {
    if (map) {
        const legend = L.control({ position: "bottomleft" });
    
        legend.onAdd = () => {
            const div = L.DomUtil.create("div", "info legend");
            div.setAttribute('class', 'map-legend')
            div.innerHTML = lista()
            return div;
        };
    
        legend.addTo(map);
        }
  }, [map]);
  return null;
}

export default Legend;
