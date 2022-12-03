import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import { SideBar } from './SideBar';
import {StudentOptions, AdminOptions } from '../../../data/NavbarOptionsData.js'
import { Navbar } from './Navbar';
import { usuario } from '../../../helpers/UserProvider';
import { LogOut } from './LogOut';
import { Logo } from './Logo';

export const  Header = () =>{
    const pages = ['Products', 'Pricing', 'Blog'];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className='header'>
        <Toolbar>
          <Logo />
          <Navbar options={usuario.idTipo === 1 ? StudentOptions : AdminOptions} pages={pages} />
          <SideBar />
          <LogOut usuario={usuario.nombre+" "+usuario.apellido} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}