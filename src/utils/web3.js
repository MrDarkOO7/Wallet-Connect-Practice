import Web3 from "web3";

const RPC_URL =
  "https://falling-crimson-theorem.quiknode.pro/7eb0fe960ec24169b7b4254f66a5d801d0c35da1/" ||
  "https://falling-crimson-theorem.quiknode.pro/7eb0fe960ec24169b7b4254f66a5d801d0c35da1/";

export const getWeb3NoAccount = () => {
  return new Web3(new Web3.providers.HttpProvider(RPC_URL));
};
