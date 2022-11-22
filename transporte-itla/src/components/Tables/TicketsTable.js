import { useEffect,useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { fetchApi } from "../../helpers/fetchApi.js"
import  Cookies  from "universal-cookie";

const cookies = new Cookies();
var usuario = cookies.get('usuario')


const columns = [
    // {
    //   field: 'Ruta',
    //   headerName: 'Ruta',
    //   description: 'Es la ruta del viaje',
    //   sortable: false,
    //   width: 300,
    //   valueGetter: (params) => {
    //     return `${params.row.idNat.descripcion}`
    //   }
    // },
    // {
    //     field: 'precio',
    //     headerName: 'Precio',
    //     description: 'El precio del viaje',
    //     sortable: false,
    //     valueGetter: (params) => {
    //       return `${params.row.idViajeNavigation.idRutaNavigation.precio} RD $`
    //     }
    //   },
    //   {
    //     field: 'horario',
    //     headerName: 'Horario',
    //     description: 'Es horario del viaje',
    //     sortable: false,
    //     valueGetter: (params) => {
    //       return `${params.row.idViajeNavigation.idHorarioNavigation.descripcion}`
    //     }
    //   },
      {
        field: 'estado',
        headerName: 'Estado',
        description: 'Es estado del viaje',
        sortable: false,
        valueGetter: (params) => {
          return `${params.row.idEstadoTicketNavigation.descripcion}`
        }
      },
  ];


export const TicketsTable = () => {

    const [selectionModel, setSelectionModel] = useState([]);
    const [tickets, setTickets] = useState([]);


    const getfromapi = async () =>{
        await fetchApi("tickets/ticketsporpagar", {
            id: `${usuario.estudiantes[0].idEstudiante}`
        })
        .then(response => {
            console.log(response.data)
            setTickets(response.data)
        })
        .catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
      getfromapi()
    }, [])
    
  return (
    <div style={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={tickets}
      getRowId={(row) => row.idTicket}
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[5]}
      checkboxSelection
      onSelectionModelChange={(newSelectionModel) => {
          setSelectionModel(newSelectionModel);
      }}
      components={{
        //   Footer: () => <Button variant='contained'>Solicitar viajes</Button>
      }}
      selectionModel={selectionModel}
    />
  </div>
  )
}
