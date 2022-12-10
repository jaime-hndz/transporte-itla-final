import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import {fetchApi} from '../../helpers/fetchApi'

export const CheckTravels = ({viaje}) => {

  const previewStyle = {
    height: 240,
    width: 320
  };

  const check = async (estudiante) =>{
    await fetchApi(`tickets/check/${viaje.idViaje}/${estudiante}`, null, 'GET')
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
    console.log(error);
    })
  }

  const [data, setData] = useState('No result');
  return (
    <div>
      <div style={{width: '500px', marginInline: 'auto'}}>
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
      <div style={{width: '500px', marginInline: 'auto'}}>
        <p>{data}</p>
      </div>
    </div>
  )
}
