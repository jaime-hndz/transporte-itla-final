import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

export const DeleteTicket = ({id}) => {

  const deleteTicket = async () =>{

    if (window.confirm("¿Seguro que quieres cancelar la reservación de este ticket?")) {
        console.log(id)
    }

  }
  
  return (
    <IconButton color='error' onClick={deleteTicket}><DeleteIcon /></IconButton>
  )
}
