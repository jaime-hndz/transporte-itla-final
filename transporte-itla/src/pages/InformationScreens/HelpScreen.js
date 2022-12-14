import React from 'react'
import { FAQTable } from '../../components/Tables/FAQTable/FAQTable';
import { PageTitle } from '../../components/Utils/PageTitle';

export const HelpScreen = () => {
  return (
    <div>
      <PageTitle>Ayuda</PageTitle>
      <h2>Recorrido por la plataforma de ITLA transporte:</h2>
      <div style={{width: 'fit-content', marginInline: 'auto', marginBlock:'40px'}}>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/M11YI4EUIX0?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
      </div>
      <FAQTable />
    </div>
  )
}
