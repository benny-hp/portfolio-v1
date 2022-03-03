import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    space: number[];
    fonts: {
      body: string;
      heading: string;
    };
    fontSizes: {
      small: number;
      normal: number;
      medium: number;
      large: number;
      heading: number;
      largeHeading: number;
      xlHeading: number;
    };
    fontWeights: {
      thin: number;
      body: number;
      bold: number;
      bolder: number;
      boldest: number;
    };
    lineHeights: {
      body: number;
      heading: number;
    };
    letterSpacing: {
      body: number;
      heading: number;
    };
    colors: {
      primary: string;
      primaryLight: string;
      primaryDark: string;
      secondary: string;
      light: string;
      dark: string;
      neutral: string;
    };
    breakpoints: number[];
    mq: () => string[];
  }
}
