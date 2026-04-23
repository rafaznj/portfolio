import { motion } from "framer-motion";
import { NavBar } from "./components/NavBar";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

export default function App() {
  return (
    <>
      <NavBar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Home />
        <Skills />
        <Projects />
        <Experience />
      </motion.main>
    </>
  );
}