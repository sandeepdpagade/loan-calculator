import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { CssBaseline } from "@mui/material";
import LoanCalculatorPage from "./components/LoanCalculatorPage";

const Home = () => {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <LoanCalculatorPage />
    </div>
  );
};

export default Home;
