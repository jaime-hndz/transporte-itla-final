import React from 'react'
import { ScheduleTable } from '../../components/Tables/ScheduleTable/ScheduleTable'
import { SaturdaySchedule, WeekSchedule } from '../../data/ScheduleData'
import { PageTitle } from '../../components/PageTitle';

export const ScheduleScreen = () => {
  return (
    <div>
        <PageTitle>Horarios</PageTitle>
        <h2>Lunes a viernes</h2>
        <ScheduleTable data={WeekSchedule} />
        <h2>Sábados</h2>
        <ScheduleTable data={SaturdaySchedule} />
    </div>
  )
}
