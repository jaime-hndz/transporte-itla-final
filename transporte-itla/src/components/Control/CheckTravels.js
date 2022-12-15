import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import {fetchApi} from '../../helpers/fetchApi'
import { StateCheking } from '../Utils/StateCheking';
import { useNotification } from '../../context/notification.context';

export const CheckTravels = ({viaje}) => {

  const [aprove, setAprove] = useState(null);

  const { getNotification } = useNotification()

  
  const previewStyle = {
    height: 240,
    width: 320
  };

  const check = async (estudiante) =>{
    await fetchApi(`tickets/check/${viaje.idViaje}/${estudiante}`, null, 'GET')
    .then((response) => {
      console.log(response)
      setAprove(response.data)
    })
    .catch((error) => {
      getNotification("Ha ocurrido error", "error")
      console.log(error);
    })
  }

  const [data, setData] = useState('Sin resultado');
  return (
    <div>
      <div className='check-travel-div'>
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              setData(result?.text);
              check(result)
            }
          }}
          style={previewStyle}
          />
      </div>
      <div className='check-travel-div flx'>
        <div>
          <p>Revisando estudiante:</p>
          <h3>{data}</h3>
        </div>
        <StateCheking state={aprove} />
      </div>
    </div>
  )
}
