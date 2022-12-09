import { IconButton } from '@mui/material'
import RemoveRoadIcon from '@mui/icons-material/RemoveRoad';

export const DeleteTravel = ({id}) => {

  const deleteTravel = async () =>{

    if (window.confirm("¿Seguro que quieres eliminar este viaje?")) {
        console.log(id)
    }

  }
  
  return (
    <IconButton color='error' onClick={deleteTravel}><RemoveRoadIcon /></IconButton>
  )
}
