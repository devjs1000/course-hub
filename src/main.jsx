import { StrictMode } from "react";
import { render } from "react-dom";
import App from "./App";
import "./styles/tailwind.css";
import "./styles/global.css";
import StoreProvider from './context/StoreProvider'
import { BrowserRouter } from "react-router-dom";

render(
  <StrictMode>
    <BrowserRouter>
    <StoreProvider>
        <App />
      </StoreProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
