import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme } from "../src/themes/index.theme";

export const withMuiTheme = (Story) => (
  <ThemeProvider theme={lightTheme}>
    <CssBaseline />
    <Story />
  </ThemeProvider>
);

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      expanded: true, // Adds the description and default columns
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  }

export const decorators = [withMuiTheme];