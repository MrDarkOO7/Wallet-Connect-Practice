import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Web3ReactProvider } from "@web3-react/core";
import { getLibrary } from "./hooks/useLibrary";
import {
  hooks as walletConnectV2Hooks,
  walletConnectV2,
} from "./connectors/walletConnectV2.js";
import { hooks as metaMaskHooks, metaMask } from "./connectors/metaMask";

const connectors = [
  [walletConnectV2, walletConnectV2Hooks],
  [metaMask, metaMaskHooks],
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Web3ReactProvider connectors={connectors} getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  </React.StrictMode>
);
