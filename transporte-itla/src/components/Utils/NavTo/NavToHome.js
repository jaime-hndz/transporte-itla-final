import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NavTo } from './NavTo';

export const NavToHome = () => {
  return (
    <div style={{display: 'flex', marginBlock: '10px'}}>
      <NavTo icon={<ArrowBackIcon />} to='/' start text='Volver' />
    </div>
  )
}
