import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useCustomTheme } from "../../theme/ThemeContext";
import { useTheme } from "@mui/material/styles";
import { Switch } from "@mui/material";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const currentPath = window.location.pathname;

  const { toggleTheme, mode } = useCustomTheme();
  const theme = useTheme();

  const handleNavClick = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  const linkClass = (path) =>
    `cursor-pointer px-3 py-1 rounded transition ${
      currentPath === path ? "bg-[#ffffff22]" : "hover:bg-[#ffffff22]"
    }`;

  return (
    <nav
      className={`${
        theme.palette.mode === "dark" ? "bg-gray-900" : "bg-[#1976d2]"
      } text-white px-6 py-4`}
    >
      <div className="flex justify-between items-center">
        {/* Mobile Hamburger */}
        <button
          className="ml-4 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className="flex items-center justify-between gap-4 w-full">
          <div className="text-lg ">Loan Calculator</div>
          <div>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 text-sm">
              <span
                onClick={() => handleNavClick("/")}
                className={linkClass("/")}
              >
                HOME
              </span>
              <span
                onClick={() => handleNavClick("/exchange")}
                className={linkClass("/exchange")}
              >
                EXCHANGE RATES (LIVE)
              </span>
              <span
                onClick={() => handleNavClick("/about")}
                className={linkClass("/about")}
              >
                ABOUT
              </span>
              <span
                onClick={() => handleNavClick("/error")}
                className={linkClass("/error")}
              >
                ERROR PAGE
              </span>
            </div>
          </div>
        </div>
        {/* Toggle Switch (MUI Theme-based) */}
        <Switch
          onClick={toggleTheme}
          className="ml-4 w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 "
        />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mt-4 flex flex-col gap-4 md:hidden">
          <span onClick={() => handleNavClick("/")} className={linkClass("/")}>
            HOME
          </span>
          <span
            onClick={() => handleNavClick("/exchange")}
            className={linkClass("/exchange")}
          >
            EXCHANGE RATES (LIVE)
          </span>
          <span
            onClick={() => handleNavClick("/about")}
            className={linkClass("/about")}
          >
            ABOUT
          </span>
          <span
            onClick={() => handleNavClick("/error")}
            className={linkClass("/error")}
          >
            ERROR PAGE
          </span>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
