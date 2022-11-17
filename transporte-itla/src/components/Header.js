import React from 'react'
import {StudentOptions, AdminOptions } from '../data/NavbarOptionsData.js'
import { Navbar } from './Navbar.js'
import logo from "../resources/itla-transporte.svg";
import { LogOut } from './LogOut.js';

var usuario = {
    nombre: 'Jaime Hernandez',
    saldo: '25',
    tipo: 'student'
}

export const Header = () => {

  return (
    <div className='header'>;
        <div className='logo-container'>
          <img src={logo} alt='logo' className='logo' />
        </div>
        <Navbar options={usuario.tipo === "student" ? StudentOptions : AdminOptions} />
        <div className='logout-container'>
          <LogOut usuario={usuario.nombre} />
          <div style={{color: 'red'}}>Balance RD$ {usuario.saldo}</div>
        </div>

    </div>
  )
}
