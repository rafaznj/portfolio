import "./assets/i18n";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NavBar />
    <Home />
    <Skills />
    <Education />
    <Experience />
    <Projects />
  </StrictMode>,
);
