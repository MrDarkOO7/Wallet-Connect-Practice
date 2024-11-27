import { useWeb3React } from "@web3-react/core";

export const useSign = () => {
  const { account, library } = useWeb3React();

  const signMessage = (message) => {
    if (!library || !account) throw new Error("No wallet connected");
    return library.getSigner(account).signMessage(message);
  };

  return { signMessage };
};
