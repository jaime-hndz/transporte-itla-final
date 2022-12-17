import { IconButton, Tooltip } from '@mui/material'
import EditRoadIcon from '@mui/icons-material/EditRoad';
import { useNavigate } from "react-router-dom";

export const NavToModifyTravel = ({viaje}) => {
  let nav = useNavigate()
  const modifyTravel = async () =>{
    nav('/modificarviaje', { state: { viaje: viaje } })
  }
  
  return (
    <Tooltip title='Editar'>
      <IconButton color='primary' onClick={modifyTravel}><EditRoadIcon /></IconButton>
    </Tooltip>
  )
}
