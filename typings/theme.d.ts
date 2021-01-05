type ColorSchemeLayout = {
  background: string;
  foreground: string;
  primary: string;
  secondary: string;
};

declare interface ColorScheme {
  name?: string;
  colors: {
    [key: string]: string;
  };
  layout: {
    light: ColorSchemeLayout;
    dark: ColorSchemeLayout;
  };
}
