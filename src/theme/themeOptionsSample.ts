import { ThemeOptions } from "@mui/material/styles";
import { components } from "./components";
import { typography } from "./typography";
import { primary, themeColors } from "./themeColors";

/********************************************
 * You can delete themeOptions.ts file and
 * rename this file to `themeOptions.ts`
 * Follow the documentation for more details
 *********************************************/

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

const themesOptions: ThemeOptions = {
  [THEMES.DEFAULT]: {
    typography,
    breakpoints,
    components: { ...components },
    palette: { primary: { ...primary, light: primary[100] }, ...themeColors },
  },
  
};

const themeOptions = (publicRuntimeConfig?: any, pathname?: string) => {
  // YOU CAN SET ANOTHER THEME HERE E.G. [THEMES.GROCERY] OR [THEMES.FURNITURE] ETC.
  let themeOptions: ThemeOptions = themesOptions[THEMES.DEFAULT];

  return themeOptions;
};

export default themeOptions;
