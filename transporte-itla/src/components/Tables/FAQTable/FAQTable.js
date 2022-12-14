import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { FAQData } from "../../../data/FAQData";
import { FAQTableRow } from "./FAQTableRow";

export const FAQTable = () => {
  return (
    <>
      <h2>Preguntas frecuentes</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            {FAQData.map((row) => <FAQTableRow row={row} />)}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
