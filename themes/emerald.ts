enum Colors {
  Tan      = '#B68D40',
  Gold     = '#D6AD60',
  Cream    = '#F4EBD0',
  Charkoal = '#122620',
}

const Emerald: ColorScheme = {
  name: 'Emerald',
  colors: Colors,
  layout: {
    light: {
      background: Colors.Cream,
      foreground: Colors.Charkoal,
      primary: Colors.Tan,
      secondary: Colors.Gold
    },
    dark:  {
      background: Colors.Charkoal,
      foreground: Colors.Cream,
      primary: Colors.Gold,
      secondary: Colors.Tan
    }
  }
}

export default Emerald
