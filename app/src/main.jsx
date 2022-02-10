import { StrictMode } from "react";
import { render } from "react-dom";
import App from "./App";
import "./styles/tailwind.css";
import "./styles/global.css";
import MainContext from "./context/mainContext";


render(
  <StrictMode>
    <MainContext>
      <App />
    </MainContext>
  </StrictMode>,
  document.getElementById("root")
);
