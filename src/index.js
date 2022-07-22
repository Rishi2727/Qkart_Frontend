import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { SnackbarProvider } from "notistack";
<<<<<<< HEAD
import { BrowserRouter, Route, Link  } from "react-router-dom";
=======
import { BrowserRouter } from "react-router-dom";
>>>>>>> 87cebf390493aafc619e78b8de78058180be64ca
import { ThemeProvider } from "@mui/system";
import theme from "./theme";

ReactDOM.render(
<<<<<<< HEAD
  
  <React.StrictMode>
          <BrowserRouter>
=======
  <React.StrictMode>
>>>>>>> 87cebf390493aafc619e78b8de78058180be64ca
        <SnackbarProvider
          maxSnack={1}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          preventDuplicate
<<<<<<< HEAD
    >

        <App />

        
      </SnackbarProvider>
            </BrowserRouter>
  </React.StrictMode>,
   document.getElementById('root')
=======
        >
          <App />
        </SnackbarProvider>
  </React.StrictMode>,
>>>>>>> 87cebf390493aafc619e78b8de78058180be64ca
);
