export interface ThemeConfig {
  colors: {
    primary: ColorConfig;
    secondary: ColorConfig;
    [key: string]: ColorConfig;
  };
}

export interface ColorConfig {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export default ThemeConfig;
