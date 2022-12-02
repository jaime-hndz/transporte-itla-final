import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const LogOut = ({usuario}) => {

  const LoggingOut = ()=>{
    cookies.remove('usuario', {path: '/'})
    window.location.href="./login"
  }

  return (
    <div style={{display:'flex', cursor: 'pointer', color:'black'}} onClick={LoggingOut}>
      <div>{usuario}</div> 
      <div><LogoutIcon /></div>
    </div>
  )
}
