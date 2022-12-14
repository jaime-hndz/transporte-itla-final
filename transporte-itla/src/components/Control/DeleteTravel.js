import { IconButton } from '@mui/material'
import RemoveRoadIcon from '@mui/icons-material/RemoveRoad';
import {fetchApi} from '../../helpers/fetchApi'
import { useNotification } from '../../context/notification.context';

export const DeleteTravel = ({id}) => {

  const { getNotification } = useNotification()
  const deleteTravel = async () =>{

    if (window.confirm("¿Seguro que quieres eliminar este viaje?")) {
      await fetchApi(`viajes/${id}`, null, 'DELETE')
      .then((response) => {
        getNotification("Eliminado correctamente", "success")
        window.location.reload()
      })
      .catch((error) => {
        getNotification("Ha ocurrido error", "error")
        console.log(error);
      })
    }

  }
  
  return (
    <IconButton color='error' onClick={deleteTravel}><RemoveRoadIcon /></IconButton>
  )
}
