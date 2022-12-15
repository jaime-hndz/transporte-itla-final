import React from 'react'
import { PageTitle } from '../../components/Utils/PageTitle';
import { AdminTravelTable } from '../../components/Tables/AdminTravelTable';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import { NavTo } from '../../components/Utils/NavTo/NavTo';

export const AdminHomeScreen = () => {
  return (
    <div>
      <PageTitle>Administrar viajes</PageTitle>
      <div className='flx mb10'>
        <NavTo icon={<AddBoxIcon />} to={'/agregarviaje'} text='Agregar viaje' />
        &nbsp;
        <NavTo icon={<AddToPhotosIcon />} to={''} text='Agregar viajes' />
      </div>
      <AdminTravelTable />
    </div>
  )
}
