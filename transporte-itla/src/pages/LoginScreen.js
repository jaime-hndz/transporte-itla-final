import React from 'react'
import { Login } from '../components/Login'

export const LoginScreen = () => {
  return (
    <>
    <div id="container">
		<div id="header">
			<div class="container">

				<div class="col-md-3"></div>
				<div class="col-md-6" style={{background: 'white',padding: '5%', borderRadius: '1%'}}>
					<p align="center"><img src="./Iniciar Sesión_files/itla-transporte.svg" class="img-responsive" /></p>
					<h4>Inicia sesión con las mismas credenciales de ORBI</h4>
					<form method="post" autocomplete="off" action="https://transporte.itla.edu.do/transporte/login/"
						id="modified">
						<label for="posicion">Usuario</label>
						<div class="form-group input-group">
							<span class="input-group-addon"><span class="glyphicon glyphicon-user"></span></span>
							<input type="text" name="user" id="posicion" required="" class="form-control"
								placeholder="Usuario" />
						</div>
						<label for="pass">Contraseña</label>
						<div class="form-group input-group">
							<span class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span>
							<input type="password" name="pass" id="pass" required="" class="form-control"
								placeholder="Contraseña" />
						</div>
						<p class="text-right"><button type="submit" class="btn btn-primary"
								id="continue">Entrar</button></p>
						<p class="text-right"><a href="https://orbi.edu.do/orbi/seguridad/usuario/recordarusuario"
								class="text-secondary">Olvidaste tu usuario?</a></p>
						<p class="text-right"><a href="https://orbi.edu.do/orbi/seguridad/usuario/resetearclave"
								class="text-secondary">Olvidaste tu contraseña?</a></p>
					</form>
					<p class="text-center" style={{color: 'red'}}></p>


					<h5 class="text-primary alert alert-info">Información del transporte: <a
							href="https://itla.edu.do/transporte">ver detalles</a></h5>

				</div>
				<div class="col-md-3"></div>

				<div class="modal " id="Aviso1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
					<div class="modal-dialog" role="document" style={{minWidth: '60%'}}>
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
								<h4 id="dataConfirmLabel" class="modal-title text-primary" align="center">Aviso</h4>
							</div>
							<div class="modal-body text-center">
								<img src="./Iniciar Sesión_files/aviso-suspencion-ruta-27.jpg" alt="AVISO ITLA"
									style={{width: '70%'}} />

							</div>
							<div class="modal-footer">
								<button class="btn btn-default" data-dismiss="modal" aria-hidden="true">Cerrar</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>	</div>

        <Login />
    </>
  )
}
