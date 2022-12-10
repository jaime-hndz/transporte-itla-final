import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import {fetchApi} from '../../helpers/fetchApi'

export const DeleteTicket = ({id}) => {

  const deleteTicket = async () =>{

    if (window.confirm("¿Seguro que quieres cancelar la reservación de este ticket?")) {
      await fetchApi(`tickets/${id}`, null, 'DELETE')
      .then((response) => {
        window.location.reload()
      })
      .catch((error) => {
      console.log(error);
      })
    }

  }
  
  return (
    <IconButton color='error' onClick={deleteTicket}><DeleteIcon /></IconButton>
  )
}
