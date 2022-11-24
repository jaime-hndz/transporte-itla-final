import { useEffect, useState } from "react";
import { fetchApi } from "../../helpers/fetchApi.js";
import Cookies from "universal-cookie";
import { DataTable } from "./DataTable.js";
import { DeleteTicket } from "../DeleteTicket.js";
import { PayTickets } from "../PayTickets.js";

const cookies = new Cookies();
var usuario = cookies.get("usuario");

const columns = [
    {
    field: 'Ruta',
    headerName: 'Ruta',
    description: 'Es la ruta del viaje',
    sortable: false,
    width: 300,
    valueGetter: (params) => {
      return `${params.row.idViajeNavigation.idRutaNavigation.descripcion}`
    }
  },
  {
      field: 'precio',
      headerName: 'Precio',
      description: 'El precio del viaje',
      sortable: false,
      valueGetter: (params) => {
        return `${params.row.idViajeNavigation.idRutaNavigation.precio} RD $`
      }
    },
    {
      field: 'horario',
      headerName: 'Horario',
      description: 'Es horario del viaje',
      sortable: false,
      valueGetter: (params) => {
        return `${params.row.idViajeNavigation.idHorarioNavigation.descripcion}`
      }
    },
  {
    field: "estado",
    headerName: "Estado",
    description: "Es estado del viaje",
    sortable: false,
    valueGetter: (params) => {
      return `${params.row.idEstadoTicketNavigation.descripcion}`;
    },
  },
  {
    field: "delete",
    headerName: "",
    description: "¿Desea eliminar el ticket reservado?",
    sortable: false,
    renderCell: (params) => {
      return <DeleteTicket id={params.row.idTicket} />;
    },
  },
];

export const TicketsTable = ({pagos=false}) => {

  const [selectionModel, setSelectionModel] = useState([]);
  const [total, setTotal] = useState(0);
  const [tickets, setTickets] = useState([]);
  const [ticketsPagar, setTicketsPagar] = useState([]);
  var estado = pagos ? "pagos" : "porpagar"

  const getfromapi = async () => {
    await fetchApi("tickets/tickets"+estado, {
      id: `${usuario.estudiantes[0].idEstudiante}`,
    })
    .then((response) => {
      setTickets(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    getfromapi();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DataTable
      rows={tickets}
      columns={columns}
      footer={
        pagos ? null : <PayTickets total={total} tickets={ticketsPagar} estudiante={usuario.estudiantes[0]} />
      }
      rowId="idTicket"
      seleccion={selectionModel}
      onSeleccion={(newSelectionModel) => {
        var ticketsSeleccionados = tickets.filter(t => newSelectionModel.includes(t.idTicket))
        var ts = ticketsSeleccionados.map(t => t.idViajeNavigation.idRutaNavigation.precio)
        
        
        var newTotal = 0
        ts.forEach(element => {
          newTotal = newTotal + element
        });

        setTicketsPagar(ticketsSeleccionados)
        setTotal(newTotal)
        setSelectionModel(newSelectionModel);
      }}
    />
  );
};
