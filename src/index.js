import React from "react";
import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import "typeface-poppins";
import Router from "./Routes/routes";
import Theme from "./Theme/Theme";
import { ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "./Redux/store.js";
import { CartProvider } from "./Context/CartContext.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <ThemeProvider theme={Theme}>
      <Provider store={store}>
        <CartProvider>
          <Router />
        </CartProvider>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
