const spacer = "1rem";

export const breakpoints = {
  spacers: {
    none: "0",
    sm: `calc(${spacer} * 0.25)`,
    md: `calc(${spacer} * 0.5)`,
    lg: `calc(${spacer} * 0.75)`,
    xl: spacer,
    xxl: `calc(${spacer} * 1.5)`,
    "3xl": `calc(${spacer} * 2)`,
    "4xl": `calc(${spacer} * 2.5)`,
    "5xl": `calc(${spacer} * 3)`,
  },
  gridBreakpoints: {
    xs: "0",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1400px",
  },
  containerMaxWidths: {
    sm: "96%",
    md: "100%",
    lg: "100%",
    xl: "1140px",
    xxl: "1200x",
  },
};
