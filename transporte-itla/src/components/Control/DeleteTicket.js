import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import {fetchApi} from '../../helpers/fetchApi'
import { useNotification } from '../../context/notification.context';


export const DeleteTicket = ({id}) => {

  const { getNotification } = useNotification()
  const deleteTicket = async () =>{

    if (window.confirm("¿Seguro que quieres cancelar la reservación de este ticket?")) {
      await fetchApi(`tickets/${id}`, null, 'DELETE')
      .then((response) => {
        window.location.reload()
        getNotification("Eliminado correctamente", "success")
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
