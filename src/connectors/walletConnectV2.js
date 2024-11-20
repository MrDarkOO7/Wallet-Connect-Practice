import { initializeConnector } from "@web3-react/core";
import { WalletConnect as WalletConnectV2 } from "@web3-react/walletconnect-v2";

export const [walletConnectV2, hooks] = initializeConnector(
  (actions) =>
    new WalletConnectV2({
      actions,
      options: {
        projectId: "56e76179389975627afbbb8fdb7d6712",
        chains: [1], // Ethereum Mainnet
        optionalChains: [1],
        showQrModal: true,
      },
      onError: (err) => {
        console.log("Error connecting the wallet");
      },
    })
);
