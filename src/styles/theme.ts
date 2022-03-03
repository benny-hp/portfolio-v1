export const theme = {
  space: [0, 1, 2, 3, 4, 6, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Montserrat, sans-serif",
  },
  fontSizes: {
    small: 0.5,
    normal: 1.6,
    medium: 1,
    large: 2,
    heading: 3,
    largeHeading: 4,
    xlHeading: 6,
  },
  fontWeights: {
    thin: 300,
    body: 400,
    bold: 600,
    bolder: 700,
    boldest: 800,
  },
  lineHeights: {
    body: 1.5,
    heading: 1,
  },
  letterSpacing: {
    body: 0.5,
    heading: 0.125,
  },
  colors: {
    primary: "#16A188",
    primaryLight: "#6CE3CF",
    primaryDark: "#266257",
    secondary: "#F9F1D7",
    light: "#FFFFFF",
    dark: "#2f3038",
    neutral: "#B2B9B9",
  },
  breakpoints: [576, 768, 992, 1200, 1400],
  mq() {
    return this.breakpoints.map((bp) => `@media (min-width: ${bp}px)`);
  },
};
