import React from "react";
import {
  Paper,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
} from "@mui/material";

const AmortizationTable = ({ schedule, formatCurrency, currency }) => (
  <Paper sx={{ mt: 3, overflow: "hidden" }}>
    <Typography variant="h6" p={2}>
      Amortization Schedule ({currency})
    </Typography>

    <TableContainer sx={{ maxHeight: 400 }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Month</TableCell>
            <TableCell>Principal</TableCell>
            <TableCell>Interest</TableCell>
            <TableCell>Remaining Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {schedule.map((row) => (
            <TableRow key={row.month}>
              <TableCell>{row.month}</TableCell>
              <TableCell>{formatCurrency(row.principal)}</TableCell>
              <TableCell>{formatCurrency(row.interest)}</TableCell>
              <TableCell>{formatCurrency(row.balance)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Paper>
);

export default AmortizationTable;
