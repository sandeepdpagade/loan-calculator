import React from "react";
import { Box, TextField, Button } from "@mui/material";

const LoanForm = ({
  amount,
  rate,
  term,
  setAmount,
  setRate,
  setTerm,
  onCalculate,
}) => (
  <>
    <Box display="flex" gap={2} flexWrap="wrap" mb={3}>
      <TextField
        label="Loan Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <TextField
        label="Interest Rate (%)"
        type="number"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
      />
      <TextField
        label="Term (Years)"
        type="number"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
    </Box>
    <Button variant="contained" onClick={onCalculate}>
      CALCULATE
    </Button>
  </>
);

export default LoanForm;
