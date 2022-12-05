import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export const ScheduleTableRow = ({row}) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell component="th" scope="row">
            <h3>{row.title}</h3>
            {row.subtitle? <h4>{row.subtitle}</h4> : null}
        </TableCell>
        <TableCell padding='checkbox'>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                HORARIO DE ENTRADA AL ITLA
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>PARADAS Y/O INTERSECCIONES</TableCell>
                    {row.horarios.map((hora,i)=>(
                        <TableCell key={i}>{hora}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.paradas.filter(paradaRow => paradaRow.importante !== false).map((paradaRow, i) => (
                    <TableRow key={i}>
                      <TableCell component="th" scope="row">
                        {paradaRow.title}
                      </TableCell>
                      {paradaRow.horarios.map((hora,i)=>(
                        <TableCell key={i}>{hora}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}
