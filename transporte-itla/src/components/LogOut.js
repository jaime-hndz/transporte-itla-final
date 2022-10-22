import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout'

export const LogOut = ({usuario}) => {
  return (
    <div>{usuario} <LogoutIcon /> </div>
  )
}
