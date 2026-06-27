import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import RatingModal from "./components/RatingModal";
import AppRoutes from "./components/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";

export const ThemeContext = React.createContext();

function App() {
  const [load, upadateLoad] = useState(true);
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <RatingModal />
      <Router>
        <Preloader load={load} />
        <div
          className="App min-h-screen bg-bg-primary text-text-primary transition-colors duration-300"
          id={load ? "no-scroll" : "scroll"}
        >
          <AppRoutes />
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
