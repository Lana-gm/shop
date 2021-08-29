import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/global";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
