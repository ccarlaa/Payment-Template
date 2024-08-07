import {createTheme} from "@mui/material";

export const lightTheme = createTheme ({
    mode: 'light',
    palette: {
        primary: {main: "#03d69d"},
        secondary: {main: "#133A6F"},
        gray: {main:' #E5E5E5'}
    },
    components: {
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: '8px',
              textTransform: 'none' 
            },
          },
        },
        MuiTextField: {
          styleOverrides: {
            root: {
              borderRadius: '8px',
            },
          },
        },
      },
})