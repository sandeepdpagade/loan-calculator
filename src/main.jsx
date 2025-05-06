import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { CustomThemeProvider } from "./theme/ThemeContext.jsx";
import { AppProvider } from "./pages/home/components/AppContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CustomThemeProvider>
      <AppProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppProvider>
    </CustomThemeProvider>
  </StrictMode>
);
