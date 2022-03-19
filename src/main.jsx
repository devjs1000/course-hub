import { StrictMode } from "react";
import { render } from "react-dom";
import App from "./App";
import "./assets/styles/global.css";
import StoreProvider from "./service/context/StoreProvider";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://xciteserver.herokuapp.com/xcite",
  cache: new InMemoryCache(),
});

render(
  <StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <StoreProvider>
          <App />
        </StoreProvider>
      </ApolloProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
