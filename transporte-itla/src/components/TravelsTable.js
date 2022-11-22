import { useEffect,useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { Button } from "@mui/material";
import { fetchApi } from "../helpers/fetchApi.js"
import  Cookies  from "universal-cookie";

const cookies = new Cookies();
var usuario = cookies.get('usuario')

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

  
export const TravelsTable = ({viajes}) => {

    const [selectionModel, setSelectionModel] = useState([]);
    useEffect(() => {
    }, [viajes,selectionModel])

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
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={viajes}
        getRowId={(row) => row.idViaje}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onSelectionModelChange={(newSelectionModel) => {
            setSelectionModel(newSelectionModel);
        }}
        components={{
            Footer: () => <Button variant='contained' onClick={SolicitarViajes}>Solicitar viajes</Button>
        }}
        selectionModel={selectionModel}
      />
    </div>
  )
}
