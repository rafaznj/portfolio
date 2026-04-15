import { NavBar } from "./components/NavBar";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

export default function App() {
  return (
    <>
      <NavBar/>
      <Home />
      <Skills />
      <Projects />
      <Experience />
    </>
  );
}
