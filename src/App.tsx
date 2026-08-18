import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import { NavBar } from "./components/NavBar";
import { StyledMain, StyledBackground } from "./styles";
import { useTheme } from "styled-components";
import Particles from "./components/Particles/Particles";

export default function App() {
  const theme = useTheme();

  return (
    <>
      <StyledBackground>
        <Particles
          particleColors={[theme.colors.primaryHover, theme.colors.primary]}
          particleCount={3000}
          particleSpread={28}
          speed={0.15}
          particleBaseSize={100}
          cameraDistance={24}
          moveParticlesOnHover
          particleHoverFactor={1}
          alphaParticles
          disableRotation={false}
        />
      </StyledBackground>
      <StyledMain
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <NavBar />
        <Home />
        <Skills />
        <Experience />
        <Projects />
      </StyledMain>
    </>
  );
}
