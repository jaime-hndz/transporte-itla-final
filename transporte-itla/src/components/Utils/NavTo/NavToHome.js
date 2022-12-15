import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NavTo } from './NavTo';

export const NavToHome = () => {
  return (
    <div className='flx mb10'>
      <NavTo icon={<ArrowBackIcon />} to='/' start text='Volver al inicio' />
    </div>
  )
}
