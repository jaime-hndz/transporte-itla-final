import React from 'react'

export const Footer = () => {
  return (
    <div id="footer">
    <footer className="footer">
      <div className="container">
        <div className="col-md-12">
          <img
            src="./Sistema de Tickets_files/escudo.webp"
            alt="Escudo Dominicano"
            className="hidden-xs"
          />
          &nbsp; &nbsp; &nbsp;
          <a
            href="https://itla.edu.do/"
            title="Ir ITLA"
            className="hidden-xs"
          >
            <img
              src="./Sistema de Tickets_files/itla-logo-2020.webp"
              alt="ITLA"
              width={128}
            />
          </a>
          <br />
          <p>Instituto Tecnológico de Las Américas ITLA</p>
          <div>
            Autopista Las Américas, Km. 27, PCSD, La Caleta, Boca Chica
            11606. <br />{" "}
            <a href="tel:809-738-4852">
              <span className="glyphicon glyphicon-earphone" />
              &nbsp; 809-738-4852
            </a>
            &nbsp; &nbsp; &nbsp;
            <a href="mailto:info@itla.edu.do">
              <span className="glyphicon glyphicon-envelope" />
              &nbsp; info@itla.edu.do
            </a>
            <br />
          </div>
          <div
            className="hidden-sm hidden-xs"
            style={{ marginBottom: 15 }}
          >
            <a
              href="https://itla.edu.do//terminos-de-uso/"

            >
              TÉRMINOS DE USO
            </a>{" "}
            |
            <a
              href="https://itla.edu.do//politicas-de-privacidad/"
            >
              POLÍTICAS DE PRIVACIDAD
            </a>{" "}
            |
            <a
              href="https://itla.edu.do//preguntas-frecuentes/"
            >
              PREGUNTAS FRECUENTES
            </a>
            <br />
            © 2022 TODOS LOS DERECHOS RESERVADOS
            <br />
            REPÚBLICA DOMINICANA
          </div>
          <div className="hidden-lg hidden-md">
            <a
              href="https://itla.edu.do//terminos-de-uso/"
            >
              TÉRMINOS DE USO
            </a>{" "}
            |
            <a
              href="https://itla.edu.do//politicas-de-privacidad/"
            >
              POLÍTICAS DE PRIVACIDAD
            </a>{" "}
            |
            <a
              href="https://itla.edu.do//preguntas-frecuentes/"
            >
              PREGUNTAS FRECUENTES
            </a>
            <div>
              <a
                href="http://bit.ly/1tR5uj4"
                title="Ver Certificación"
              >
                Version Movil certificado bajo la NORTIC 23:2013-98659
              </a>
            </div>
            <br />
            © 2022 TODOS LOS DERECHOS RESERVADOS
            <br />
          </div>
        </div>
      </div>
    </footer>
  </div>
  )
}
