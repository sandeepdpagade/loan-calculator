import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useAppContext } from "./AppContext";
import { useLoanCalculator } from "./useLoanCalculator";
import LoanForm from "../components/LoanForm";
import EMIResult from "../components/EMIResult";
import CurrencySelector from "../components/CurrencySelector";
import AmortizationTable from "../components/AmortizationTable";

const LoanCalculatorPage = () => {
  const [amount, setAmount] = useState(100000);
  const [rate, setRate] = useState(8.5);
  const [term, setTerm] = useState(5);

  const { currency, setCurrency, exchangeRates } = useAppContext();
  const { schedule, monthlyEMI, calculateEMI, reset } = useLoanCalculator();

  const handleCalculate = () => {
    calculateEMI(Number(amount), Number(rate), Number(term));
  };

  const formatCurrency = (value) =>
    `${(value * (exchangeRates[currency] || 1)).toFixed(2)} ${currency}`;

  return (
    <>
      <div className="container mx-auto max-w-6xl">
        <Box p={4}>
          <Typography variant="h4" gutterBottom>
            Loan Calculator Dashboard
          </Typography>

          <LoanForm
            amount={amount}
            rate={rate}
            term={term}
            setAmount={setAmount}
            setRate={setRate}
            setTerm={setTerm}
            onCalculate={handleCalculate}
          />

          {monthlyEMI && (
            <>
              <EMIResult
                monthlyEMI={monthlyEMI}
                formatCurrency={formatCurrency}
              />
              <CurrencySelector
                currency={currency}
                setCurrency={setCurrency}
                exchangeRates={exchangeRates}
                onReset={reset}
              />
              <AmortizationTable
                schedule={schedule}
                formatCurrency={formatCurrency}
                currency={currency}
              />
            </>
          )}
        </Box>
      </div>
    </>
  );
};

export default LoanCalculatorPage;
