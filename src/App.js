import React, { useState, useEffect, Suspense, lazy } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RatingModal from "./components/RatingModal";
import PageWrapper from "./components/PageWrapper";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import HomePageSkeleton from "./components/skeletons/HomePageSkeleton";
import ProjectsPageSkeleton from "./components/skeletons/ProjectsPageSkeleton";
import GalleryPageSkeleton from "./components/skeletons/GalleryPageSkeleton";
import ExperiencePageSkeleton from "./components/skeletons/ExperiencePageSkeleton";
import GenericPageSkeleton from "./components/skeletons/GenericPageSkeleton";
import ResumeSkeleton from "./components/skeletons/ResumeSkeleton";

const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/About/About"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Experience = lazy(() => import("./components/Experience/Experience"));
const Gallery = lazy(() => import("./components/Gallery/Gallery"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Resume = lazy(() => import("./components/Resume/ResumeNew"));

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
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<HomePageSkeleton />}>
                  <PageWrapper>
                    <Home />
                  </PageWrapper>
                </Suspense>
              }
            />
            <Route
              path="/project"
              element={
                <Suspense fallback={<ProjectsPageSkeleton />}>
                  <PageWrapper>
                    <Projects />
                  </PageWrapper>
                </Suspense>
              }
            />
            <Route
              path="/about"
              element={
                <Suspense fallback={<GenericPageSkeleton blocks={4} />}>
                  <PageWrapper>
                    <About />
                  </PageWrapper>
                </Suspense>
              }
            />
            <Route
              path="/experience"
              element={
                <Suspense fallback={<ExperiencePageSkeleton />}>
                  <PageWrapper>
                    <Experience />
                  </PageWrapper>
                </Suspense>
              }
            />
            <Route
              path="/gallery"
              element={
                <Suspense fallback={<GalleryPageSkeleton />}>
                  <PageWrapper>
                    <Gallery />
                  </PageWrapper>
                </Suspense>
              }
            />
            <Route
              path="/contact"
              element={
                <Suspense fallback={<GenericPageSkeleton blocks={2} />}>
                  <PageWrapper>
                    <Contact />
                  </PageWrapper>
                </Suspense>
              }
            />
            <Route
              path="/resume"
              element={
                <Suspense fallback={<ResumeSkeleton />}>
                  <PageWrapper>
                    <Resume />
                  </PageWrapper>
                </Suspense>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
