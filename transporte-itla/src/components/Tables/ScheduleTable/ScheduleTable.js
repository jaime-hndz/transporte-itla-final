import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { ScheduleTableRow } from "./ScheduleTableRow";

export const ScheduleTable = ({data}) => {
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableBody>
        {data.map((row, i) => (
            <ScheduleTableRow row={row} key={i} />
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}
