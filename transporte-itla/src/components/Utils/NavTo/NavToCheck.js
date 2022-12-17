import { IconButton, Tooltip } from '@mui/material'
import { useNavigate } from "react-router-dom";
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';

export const NavToCheck = ({viaje}) => {
  let nav = useNavigate()
  const checkTravels = async () =>{
    nav('/checkviaje', { state: { viaje: viaje } })
  }

  return (
    <Tooltip title='Checkear'>
      <IconButton color='secondary' onClick={checkTravels}><QrCodeScannerIcon /></IconButton>
    </Tooltip>
  )
}
