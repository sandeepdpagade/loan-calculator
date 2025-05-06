import React from "react";
import { Typography } from "@mui/material";

const EMIResult = ({ monthlyEMI, formatCurrency }) => (
  <Typography variant="h6" mt={3}>
    Monthly EMI: {formatCurrency(monthlyEMI)}
  </Typography>
);

export default EMIResult;
