import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import ErrorPage from "./pages/errorPage/ErrorPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/error-page" element={<ErrorPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
