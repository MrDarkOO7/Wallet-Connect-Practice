import React, { useEffect, useState } from "react";
import useAuth from "./hooks/useAuth";
import { useWeb3React } from "@web3-react/core";

const WalletConnection = () => {
  const web3ReactInstance = useWeb3React();
  const { account } = web3ReactInstance;
  const { login, logout } = useAuth();
  const [connectorId, setConnectorId] = useState(null);

  const connectWallet = async (connectorID) => {
    setConnectorId(connectorID);
    await login(connectorID);
  };

  const disconnectWallet = async () => {
    await logout();
  };

  useEffect(() => {
    const savedConnectorID = localStorage.getItem("connectorId");
    savedConnectorID && connectWallet(savedConnectorID);
  }, []);

  return (
    <div className="App">
      <h2>This is a demo for connecting Crypto Wallets</h2>
      {account ? (
        <div>
          <p>Connected Account: {account}</p>
          <button onClick={disconnectWallet}>Disconnect Wallet</button>
        </div>
      ) : (
        <div>
          <button
            style={{ margin: 12 }}
            onClick={() => connectWallet("injected")}
          >
            Connect MetaMask
          </button>
          <button onClick={() => connectWallet("walletconnect")}>
            Connect WalletConnect
          </button>
        </div>
      )}
    </div>
  );
};

export default WalletConnection;
