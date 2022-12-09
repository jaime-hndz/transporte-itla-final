import { IconButton } from '@mui/material'
import EditRoadIcon from '@mui/icons-material/EditRoad';
import { useNavigate } from "react-router-dom";

export const ModifyTravel = ({viaje}) => {
  let nav = useNavigate()
  const modifyTravel = async () =>{
    nav('/modificarviaje', { state: { viaje: viaje } })
  }
  
  return (
    <IconButton color='primary' onClick={modifyTravel}><EditRoadIcon /></IconButton>
  )
}
