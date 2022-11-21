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
	  <Paper elevation={2} style={{padding: '40px'}}>
		<div className="container-login">
			<div className="image-login">
				<img src={logo} alt="logotransporte" />
			</div>
			<h4>Inicia sesión con las mismas credenciales de ORBI</h4>
			<Login />
			<p>
			<a href="https://orbi.edu.do/orbi/seguridad/usuario/recordarusuario">
				¿Olvidaste tu usuario?
			</a>
			</p>
			<p>
			<a href="https://orbi.edu.do/orbi/seguridad/usuario/resetearclave">
				¿Olvidaste tu contraseña?
			</a>
			</p>
		</div>
	  </Paper>
    </Container>
  );
};
