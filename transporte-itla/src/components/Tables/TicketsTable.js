import { useEffect, useState } from "react";
import { fetchApi } from "../../helpers/fetchApi.js";
import { DataTable } from "./DataTable.js";
import { DeleteTicket } from "../Control/DeleteTicket.js";
import { PayTickets } from "../Control/PayTickets.js";
import { usuario } from "../../helpers/UserProvider";
import moment from "moment";
import { useNotification } from '../../context/notification.context';

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
      field: 'fecha',
      headerName: 'Fecha',
      description: 'Es fecha del viaje',
      sortable: false,
      width: 200,
      valueGetter: (params) => {
        return `${moment(params.row.idViajeNavigation.fecha).utc().format("DD-MM-YYYY")}`;
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
    headerName: "Acciones",
    description: "¿Desea eliminar el ticket reservado?",
    sortable: false,
    renderCell: (params) => {
      return <DeleteTicket id={params.row.idTicket} />;
    },
  },
];

export const TicketsTable = ({pagos=false}) => {

  const { getNotification } = useNotification()
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
      console.log(response.data)
      setTickets(response.data);
    })
    .catch((error) => {
      getNotification("Ha ocurrido error al cargar", "error")
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
      columns={!pagos ? columns : columns.filter(c => c.field !== 'delete')}
      footer={
        pagos ? null : <PayTickets total={total} tickets={ticketsPagar} estudiante={usuario.estudiantes[0]} />
      }
      rowId="idTicket"
      seleccion={selectionModel}
      setSeleccion={(newSelectionModel) => {
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
