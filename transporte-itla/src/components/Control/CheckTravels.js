import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

export const CheckTravels = ({viaje}) => {

  const [data, setData] = useState('No result');
  return (
    <>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }
        }}
        style={{ width: '500px' }}
      />
      <p>{data}</p>
    </>
  )
}
