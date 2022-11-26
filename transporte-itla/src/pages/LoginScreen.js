import { Paper } from "@mui/material";
import { useEffect } from 'react';
import { Container } from "@mui/system";
import React from "react";
import { Login } from "../components/Login";
import logo from "../resources/itla-transporte.svg";
import '../styles/login.css'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const LoginScreen = () => {

  useEffect(() => {
	if (cookies.get('usuario')) {
		window.location.href="./"
	}
  }, [])
  
  return (
    <Container maxWidth="sm">
	  <Paper elevation={2} className='box-login'>
		<div className="container-login">
			<div className="image-login">
				<img src={logo} alt="logotransporte" />
			</div>
			<div style={{textAlign: 'center', marginBottom: '40px'}}>
				<h3>Inicia sesión con las mismas credenciales de ORBI</h3>
			</div>
			<Login />
			<div className="login-footer">
				<div className="recordar-links">
					<a href="https://orbi.edu.do/orbi/seguridad/usuario/recordarusuario">
						¿Olvidaste tu usuario?
					</a>
					<br />
					<a href="https://orbi.edu.do/orbi/seguridad/usuario/resetearclave">
						¿Olvidaste tu contraseña?
					</a>
				</div>
				<div className="detalles-div">
					<div>Información del transporte: </div>
					<div>
						<a href="https://itla.edu.do/transporte">ver detalles</a>
					</div>
				</div>
			</div>
		</div>
	  </Paper>
    </Container>
  );
};
