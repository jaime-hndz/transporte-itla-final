import { IconButton } from '@mui/material'
import { useNavigate } from "react-router-dom";
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';

export const CheckT = ({viaje}) => {
  let nav = useNavigate()
  const checkTravels = async () =>{
    nav('/checkviaje', { state: { viaje: viaje } })
  }

  return (
    <IconButton color='secondary' onClick={checkTravels}><QrCodeScannerIcon /></IconButton>
  )
}
