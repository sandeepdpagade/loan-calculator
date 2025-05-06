import { createContext, useContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currency, setCurrency] = useState("USD");
  const [exchangeRates, setExchangeRates] = useState({ USD: 1 });

  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/USD`)
      .then((res) => res.json())
      .then((data) => setExchangeRates(data.rates));
  }, []);

  return (
    <AppContext.Provider value={{ currency, setCurrency, exchangeRates }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
