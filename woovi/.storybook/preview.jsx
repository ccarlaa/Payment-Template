import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme } from "../src/themes/index.theme";
import '../src/GlobalStyle/index.css'

/** @type {import('tailwindcss').Config} */

export const withMuiTheme = (Story) => (
  <ThemeProvider theme={lightTheme}>
    <CssBaseline />
    <Story />
  </ThemeProvider>
);

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  }

export const decorators = [withMuiTheme];