import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export const FAQTableRow = ({row}) => {
    const [open, setOpen] = React.useState(false);
    return (
      <>
          <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell component="th" scope="row">
            <Typography variant="h5" gutterBottom component="div">
                {row.Q}
            </Typography>
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
                  {row.A}
                </Typography>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    )
}
