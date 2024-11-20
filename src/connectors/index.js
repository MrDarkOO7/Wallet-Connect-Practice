import { metaMask } from "./metaMask";
import { walletConnectV2 } from "./walletConnectV2";

const ConnectorNames = {
  Injected: "injected",
  WalletConnect: "walletconnect",
};

export const connectorsByName = {
  [ConnectorNames.Injected]: metaMask,
  [ConnectorNames.WalletConnect]: walletConnectV2,
};
