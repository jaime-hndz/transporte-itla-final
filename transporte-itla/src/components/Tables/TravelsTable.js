import { useState } from "react";
import { Button, Input } from "@mui/material";
import { fetchApi } from "../../helpers/fetchApi.js"
import { DataTable } from "./DataTable.js";
import { usuario } from "../../helpers/UserProvider";
import { FooterButton } from "../Utils/FooterButton.js";

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
        field: 'precio',
        headerName: 'Precio',
        description: 'El precio del viaje',
        sortable: false,
        valueGetter: (params) => {
          return `${params.row.idRutaNavigation.precio} RD $`
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

  
export const TravelsTable = () => {

    const [selectionModel, setSelectionModel] = useState([]);
    const [viajes, setViajes] =  useState([])
    const [formValues, setformValues] = useState({
      fecha: null
    })


    const SolicitarViajes = async () =>{
        await fetchApi(`tickets/posttickets`, {
            viajes: selectionModel[0],
            id: `${usuario.estudiantes[0].idEstudiante}`,
        }, 'POST')
        .then(response => {
         console.log(response.data)
        })
        .catch((error) => {
        console.log(error);
        });
    }

    const handleChange = async (e) =>{
      await setformValues({
        ...formValues,
        [e.target.name] : e.target.value
          
      })
    }
  
    const handleSubmit = async (e) =>{
  
      console.log(formValues)
      e.preventDefault()
      await fetchApi(`viajes/bydate/${usuario.estudiantes[0].idEstudiante}`, formValues)
      .then(response => {
        setViajes(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
    }

  return (
    <>
      <h2>Viajes disponibles</h2>
      <form onSubmit={handleSubmit}>
        <div className="inputTravelsTable">
          <div>
            <Input type="date" onChange={handleChange} required name='fecha'/>
          </div>
          <div>
            <Button variant="contained" type="submit">Ver viajes disponibles</Button>
          </div>
        </div>

      </form>
      <DataTable
        rows={viajes}
        columns={columns}
        footer={<FooterButton onClick={SolicitarViajes}>Solicitar viajes</FooterButton>}
        rowId='idViaje'
        seleccion={selectionModel}
        setSeleccion={setSelectionModel}
      />
    </>
  )
}
