import React, { useEffect } from 'react'
import {StudentOptions, AdminOptions } from '../data/NavbarOptionsData.js'
import { Navbar } from './Navbar.js'
import logo from "../resources/itla-transporte.svg";
import { LogOut } from './LogOut.js';
import Cookies from 'universal-cookie';
import { Balance } from './Balance.js';

const cookies = new Cookies();

var usuario = cookies.get('usuario')

export const Header = () => {

  useEffect(() => {
    console.log(usuario)
  
  }, [])
  

  return (
    <div className='header'>;
        <div className='logo-container'>
          <img src={logo} alt='logo' className='logo' />
        </div>
        <Navbar options={usuario.idTipo === 1 ? StudentOptions : AdminOptions} />
        <div className='logout-container'>
          <LogOut usuario={usuario.nombre+" "+usuario.apellido} />
          {usuario.estudiantes[0] ? <Balance saldo={usuario.estudiantes[0].saldo} /> : <div style={{color: 'blue'}}>Administrador/a</div>}
        </div>

    </div>
  )
}
