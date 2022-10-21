import React from 'react'

export const Header = () => {
  return (
    <div id="header">
    <div className="container-fluid nav-top hidden-xs">
      <ul className="nav navbar-nav" style={{ marginLeft: 160 }}>
        <li style={{ paddingTop: 22 }}></li>
      </ul>
    </div>
    <nav className="navbar navbar-default navbar-static-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <ul className="nav navbar-nav">
            <li>
              <a
                className="navbar-brand"
                href="https://transporte.itla.edu.do/transporte/"
              >
                <img
                  src="./Sistema de Tickets_files/itla-transporte.svg"
                  alt="ITLA Transporte"
                  width="850%"
                />
              </a>
            </li>
          </ul>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul id="menu-header-menu" className="nav navbar-nav nav-main">
            <li>
              <a
                title="Inicio"
                href="https://transporte.itla.edu.do/transporte/"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                title="Ver mis solicitudes"
                href="https://transporte.itla.edu.do/transporte/tickets"
              >
                Ver Solicitudes
              </a>
            </li>
            <li>
              <a
                title="Ver mis tickets reservados"
                href="https://transporte.itla.edu.do/transporte/tickets-reservados"
              >
                Tickets Reservados
              </a>
            </li>
            <li>
              <a
                title="Forma de pago"
                href="https://transporte.itla.edu.do/transporte/formas-de-pago"
              >
                Formas de pago
              </a>
            </li>
            <li>
              <a
                title="Horarios"
                href="https://transporte.itla.edu.do/transporte/horarios"
              >
                Horarios
              </a>
            </li>
          </ul>
          <div className="navbar-right">
            <ul className="nav navbar-nav">
              <li>
                <a style={{ color: "red" }} href='google.com'>Balance RD$ 25</a>
              </li>
              <li>
                <a
                  title="Salir"
                  href="https://transporte.itla.edu.do/transporte/logout"
                >
                  Jaime Hernández{" "}
                  <span className="glyphicon glyphicon-log-out" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
  )
}
