import { StrictMode } from "react";
import { render } from "react-dom";
import App from "./App";
import "./styles/tailwind.css";
import "./styles/global.css";
import MainContext from "./context/mainContext";
import { BrowserRouter } from "react-router-dom";

render(
  <StrictMode>
    <BrowserRouter>
      <MainContext>
        <App />
      </MainContext>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
