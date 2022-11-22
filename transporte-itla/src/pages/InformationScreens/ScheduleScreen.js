import React from 'react'
import { ScheduleTable } from '../../components/Tables/ScheduleTable/ScheduleTable'
import { SaturdaySchedule, WeekSchedule } from '../../data/ScheduleData'

export const ScheduleScreen = () => {
  return (
    <div>
        <h1>Horarios</h1>
        <h2>Lunes a viernes</h2>
        <ScheduleTable data={WeekSchedule} />
        <h2>Sábados</h2>
        <ScheduleTable data={SaturdaySchedule} />
    </div>
  )
}
