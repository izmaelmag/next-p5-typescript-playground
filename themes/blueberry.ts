enum Colors {
  Midnight = '#1E1F26',
  Indigo = '#283655',
  Blueberry = '#4D648D',
  LightBlue = '#D0E1F9'
}

const Blueberry: ColorScheme = {
  name: 'Blueberry',
  colors: Colors,
  layout: {
    light: {
      background: Colors.LightBlue,
      foreground: Colors.Midnight,
      primary: Colors.Indigo,
      secondary: Colors.Blueberry
    },
    dark: {
      background: Colors.Midnight,
      foreground: Colors.LightBlue,
      primary: Colors.Blueberry,
      secondary: Colors.Blueberry
    }
  }
};

export default Blueberry;
