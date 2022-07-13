import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ApiProvider } from "./Providers/Api";
import { TokenProvider } from "./Providers/Token";
import { UserProvider } from "./Providers/User";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApiProvider>
      <UserProvider>
        <TokenProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </TokenProvider>
      </UserProvider>
    </ApiProvider>
  </React.StrictMode>
);
