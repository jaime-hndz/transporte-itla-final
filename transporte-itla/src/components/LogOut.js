import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout'

export const LogOut = ({usuario}) => {
  return (
    <div style={{display:'flex'}}>
      <div>{usuario}</div> 
      <div><LogoutIcon /></div>
    </div>
  )
}
