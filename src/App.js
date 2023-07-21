import * as React from 'react';
import Box from '@mui/material/Box';

//components
import SideNavBar from './components/SideNavBar';
import TopNavBar from './components/TopNavBar';
import WorkSpace from './components/WorkSpace';

//styling
import "./App.css";

//Themeing
import { ThemeProvider, createTheme } from '@mui/material';

const CustomTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      paper: "#000000",
      default: "#000000",
      // paper: "white",
      // default: "white",
    },
    primary: {
      main: "#ffffff",
    },
    text: {
      // primary: "#000000",
      // secondary: "#000000",
    }

  },
  typography: {

    button: {
      textTransform: "none",
    }
  }
});

export default function MyApp() {
  return (
    <>
      <ThemeProvider theme={CustomTheme}>
        <header>
          <TopNavBar />
          <SideNavBar />
        </header>
        <main >
          <Box id='WorkArea' sx={{}}>
            <WorkSpace />
          </Box>
        </main>
      </ThemeProvider>
    </>
  );
}