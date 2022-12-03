import React from 'react'
import { RoutesMap } from '../../components/RoutesMap'
import { PageTitle } from '../../components/PageTitle';

export const RoutesMapScreen = () => {
  return (
    <div>
        <PageTitle>Mapa de rutas</PageTitle>
        <RoutesMap />
    </div>
  )
}
