import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import {fetchApi} from '../../helpers/fetchApi'
import { useNotification } from '../../context/notification.context';
import { useNavigate } from "react-router-dom";


export const DeleteTicket = ({id}) => {

  const { getNotification } = useNotification()
  const navigate = useNavigate();

  const deleteTicket = async () =>{

    if (window.confirm("¿Seguro que quieres cancelar la reservación de este ticket?")) {
      await fetchApi(`tickets/${id}`, null, 'DELETE')
      .then((response) => {
        getNotification("Eliminado correctamente", "success")
        navigate(0)
      })
      .catch((error) => {
        getNotification("Ha ocurrido error", "error")
        console.log(error);
      })
    }

  }
  
  return (
    <IconButton color='error' onClick={deleteTicket}><DeleteIcon /></IconButton>
  )
}
