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
    `cursor-pointer px-4 py-2 rounded transition ${
      currentPath === path ? "bg-[#ffffff22]" : "hover:bg-[#ffffff22]"
    }`;

  return (
    <nav
      className={`${
        theme.palette.mode === "dark" ? "bg-gray-900" : "bg-[#1976d2]"
      } text-white px-4 py-4 relative`}
    >
      <div className="flex justify-between items-center">
        {/* Hamburger */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="text-lg ">Loan Calculator</div>
        <div className="flex items-center gap-4">
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 text-sm">
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

          {/* Theme Switch */}
          <Switch onClick={toggleTheme} />
        </div>
      </div>

      {/* Sliding Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white text-black z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-white/20">
          <div className="text-lg">Menu</div>
          <button onClick={() => setMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col px-4 gap-4 mt-4 text-sm">
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
      </div>

      {/* Optional: Background overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
