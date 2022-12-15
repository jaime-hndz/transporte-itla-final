import { Paper } from '@mui/material';
import React from 'react'
import { PageTitle } from '../../components/Utils/PageTitle';
import logo from "../../resources/itla-transporte.svg";
import jaime from "../../resources/2x2.JPG";

export const AboutScreen = () => {
  return (
    <div>
      <PageTitle>Acerca de</PageTitle>
      <Paper className='about-container flx mi-auto'>
        <div>
          <div>
            <img src={logo} alt="logo" className='about-logo' />
          </div>
          <div style={{marginLeft: '30px'}}>
            <h2>Sistema de transporte ITLA</h2>
            <h3>Jhndz. Software </h3>
            <h3>2022 &copy;  </h3>
            <h3>Versión 6.3.7</h3>
          </div>
        </div>
        <div>
          <div>
            <img src={jaime} alt="profile" className='about-profile' />
          </div>
          <div>
            <h4>Realizado por:</h4>
            <h3>Jaime Rafael Hernández Peña </h3>
            <h3>Matricula 2020-10613  </h3>
            <a href='https://t.me/Jaime_hndz'> Telegram </a>
            |
            <a href='https://www.linkedin.com/in/jaime-rafael-hernández-peña-746a14203/'> Linkedin </a>
          </div>
        </div>
      </Paper>
    </div>
  )
}
