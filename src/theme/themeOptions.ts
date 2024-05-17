import { ThemeOptions } from "@mui/material/styles";
import { components } from "./components";
import { blue, marron, paste, primary, themeColors } from "./themeColors";
import { typography } from "./typography";

const THEMES = {
  
  DEFAULT: "DEFAULT",
  
};

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
};

/*
WE CREATED MULTIPLE THEME OPTIONS FOR DIFFERENT SHOP VARIATION.

YOU CAN JUST KEEP [THEMES.DEFAULT] AND REMOVE OTHER THEME OPTIONS.
*/
const themesOptions: ThemeOptions = {
  [THEMES.DEFAULT]: {
    typography,
    breakpoints,
    components: { ...components },
    palette: { primary: { ...primary, light: primary[100] }, ...themeColors },
  },

};

const themeOptions = (publicRuntimeConfig: any, pathname: string) => {
  let themeOptions: ThemeOptions;

  /*
    YOU CAN ALSO REMOVE updateTheme function
    AND FOLLOWING ENTIRE switch case BLOCK.
  */
  const updateTheme = (themeName: string) => {
    publicRuntimeConfig.theme = themeName;
    themeOptions = themesOptions[publicRuntimeConfig.theme];
  };

  switch (pathname) {
    case "/":
      updateTheme(THEMES.DEFAULT);
      break;

    default:
      themeOptions = themesOptions[publicRuntimeConfig.theme];
      break;
  }

  return themeOptions;
};

export default themeOptions;
