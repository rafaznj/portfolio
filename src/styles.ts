import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
`;

export const StyledMain = styled(motion.main)`
  position: relative;
  z-index: 1;
`;
