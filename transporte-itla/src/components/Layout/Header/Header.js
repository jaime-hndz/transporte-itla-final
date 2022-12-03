import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { SideBar } from './SideBar';
import {StudentOptions, AdminOptions } from '../../../data/NavbarOptionsData.js'
import { Navbar } from './Navbar';
import { usuario } from '../../../helpers/UserProvider';
import { LogOut } from './LogOut';
import { Logo } from './Logo';

export const  Header = () =>{
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" className="header">
        <Toolbar>
          <Logo />
          <Navbar
            options={
              usuario.idTipo === 1
                ? StudentOptions.filter((opt) => opt.important === true)
                : AdminOptions.filter((opt) => opt.important === true)
            }
          />
          <SideBar
            options={usuario.idTipo === 1 ? StudentOptions : AdminOptions}
          />
          <LogOut usuario={usuario.nombre + " " + usuario.apellido} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}