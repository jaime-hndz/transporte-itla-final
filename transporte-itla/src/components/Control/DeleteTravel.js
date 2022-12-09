import { IconButton } from '@mui/material'
import RemoveRoadIcon from '@mui/icons-material/RemoveRoad';
import {fetchApi} from '../../helpers/fetchApi'

export const DeleteTravel = ({id}) => {

  const deleteTravel = async () =>{

    if (window.confirm("¿Seguro que quieres eliminar este viaje?")) {
      await fetchApi(`viajes/${id}`, null, 'DELETE')
      .then((response) => {
        window.location.reload()
      })
      .catch((error) => {
      console.log(error);
      })
    }

  }
  
  return (
    <IconButton color='error' onClick={deleteTravel}><RemoveRoadIcon /></IconButton>
  )
}
