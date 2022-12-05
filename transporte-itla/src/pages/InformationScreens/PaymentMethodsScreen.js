import React from "react";
import { PageTitle } from '../../components/Utils/PageTitle';

export const PaymentMethodsScreen = () => {
  return (
    <div>
      <div>
        <PageTitle>Formas de pago</PageTitle>
        <h3>Pago en Línea</h3>
        <p>
          Recarga tu balance con tarjeta de crédito a través de Orbi:{" "}
          <a href="https://orbi.edu.do/">orbi.edu.do</a>, ingresas con tus
          credenciales y luego haz clic en: Mi menú &gt; Caja &gt; Pagos en
          Línea &gt; Pagos Generales.
        </p>
        <h3>Por Ventanilla</h3>
        <p>
          Área de Caja del Edif 2, puede recargar su balance en efectivo,
          tarjeta de crédito y/o débito, en horarios de Lunes – Viernes 08:30 AM
          – 9:30 PM y Sábados 09:00 AM. – 12:30 PM
        </p>
        <p>
          Área de BookShop del Edif. 4 solo en efectivo, en horarios de Lunes –
          Viernes 08:00 AM – 10:00 PM y Sábados 9:00 AM- 6:00 PM
        </p>
        <h3>Por Teléfono</h3>
        <p>
          Llamando al Tel:809-738-4852 ext.: 313 / 362 para pagos con tarjeta de
          crédito (mastercard y visa).
        </p>
        <h3>Vía esta web de transporte</h3>
        <p>
          Solo debes recargar en caja o el BookShop en efectivo, para tener
          balance disponible y reservar tus solicitudes.
        </p>
        <p>
          Para más información llamar al 809-738-4852 ext. 223 Departamento de
          Transporte
        </p>
        <br />
        <p>
          <b>Nota:</b> Si no pudo realizar su reserva a tiempo, puede solicitar
          el ticket de emergencia de la salida con una penalidad de RD$100 en el
          bookshop.
        </p>
      </div>
    </div>
  );
};
