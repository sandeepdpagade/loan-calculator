import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

const CurrencySelector = ({
  currency,
  setCurrency,
  exchangeRates,
  onReset,
}) => (
  <Box mt={2} display="flex" justifyContent="space-between" alignItems="center" gap={2}>
    <FormControl>
      <InputLabel>Currency</InputLabel>
      <Select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        label="Currency"
      >
        {Object.keys(exchangeRates).map((cur) => (
          <MenuItem key={cur} value={cur}>
            {cur}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    <Button variant="outlined" color="secondary" onClick={onReset}>
      RESET TABLE
    </Button>
  </Box>
);

export default CurrencySelector;
