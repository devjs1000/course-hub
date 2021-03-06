import { StrictMode } from "react";
import { render } from "react-dom";
import App from "./App";
import "./styles/tailwind.css";
import "./styles/global.css";
import StoreProvider from "./context/StoreProvider";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
const api = {
  dev: "http://localhost:6900/xcite",
  online: "https://xcite-server.herokuapp.com/xcite",
};
const client = new ApolloClient({
  uri: api.dev,
  cache: new InMemoryCache(),
  fetchOptions: {
    mode: "no-cors",
  },
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
