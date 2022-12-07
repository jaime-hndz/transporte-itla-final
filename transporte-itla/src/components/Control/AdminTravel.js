import { useEffect, useState } from "react";
import { fetchApi } from "../../helpers/fetchApi.js"
import { DataTable } from "../Tables/DataTable";
import {FooterButton} from '../Utils/FooterButton'
// import { usuario } from "../../helpers/UserProvider.js";
import moment from "moment";

const columns = [
    {
      field: 'Ruta',
      headerName: 'Ruta',
      description: 'Es la ruta del viaje',
      sortable: false,
      width: 300,
      valueGetter: (params) => {
        return `${params.row.idRutaNavigation.descripcion}`
      }
    },
    {
        field: 'fecha',
        headerName: 'Futa',
        description: 'Es la fecha del viaje',
        sortable: false,
        width: 300,
        valueGetter: (params) => {
          return `${moment(params.row.fecha).utc().format('DD-MM-YYYY')}`
        }
    },
    {
    field: 'horario',
    headerName: 'Horario',
    description: 'Es horario del viaje',
    sortable: false,
    valueGetter: (params) => {
        return `${params.row.idHorarioNavigation.descripcion}`
    }
    },
];

export const AdminTravel = () => {

    const [selectionModel, setSelectionModel] = useState([]);
    const [viajes, setViajes] =  useState([])

    useEffect(() => {
        handleLoad()
    }, [])

    const EliminarViajes = async () =>{
      console.log(selectionModel)
      await fetchApi(`viajes/deleteviajes`, selectionModel, 'DELETE')
      .then(response => {
       console.log(response.data)
      })
      .catch((error) => {
      console.log(error);
      });
  }
    
    const handleLoad = async () =>{
      await fetchApi("viajes")
      .then(response => {
        console.log(response.data)
        setViajes(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
    }
  return (
    <DataTable
    rows={viajes}
    columns={columns}
    rowId='idViaje'
    footer={<FooterButton onClick={EliminarViajes}>Eliminar viajes seleccionados</FooterButton>}
    seleccion={selectionModel}
    setSeleccion={setSelectionModel}
  />
  )
}
