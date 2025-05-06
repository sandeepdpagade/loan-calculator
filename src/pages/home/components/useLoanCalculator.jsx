import { useState } from "react";

export const useLoanCalculator = () => {
  const [schedule, setSchedule] = useState([]);
  const [monthlyEMI, setMonthlyEMI] = useState(null);

  const calculateEMI = (amount, rate, termYears) => {
    const months = termYears * 12;
    const monthlyRate = rate / 100 / 12;
    const emi =
      (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
    setMonthlyEMI(emi.toFixed(2));

    let balance = amount;
    const newSchedule = Array.from({ length: months }, (_, i) => {
      const interest = balance * monthlyRate;
      const principal = emi - interest;
      balance -= principal;
      return {
        month: i + 1,
        principal: principal.toFixed(2),
        interest: interest.toFixed(2),
        balance: balance.toFixed(2),
      };
    });
    setSchedule(newSchedule);
  };

  const reset = () => {
    setMonthlyEMI(null);
    setSchedule([]);
  };

  return { schedule, monthlyEMI, calculateEMI, reset };
};
