import { Web3Provider } from "@ethersproject/providers";

// Converts a raw provider (e.g., MetaMask) to an ethers.js Web3Provider for signing transactions
export const getLibraryForSign = (provider) => {
  const library = new Web3Provider(provider);
  console.log("library", library);
  return library;
};

// Returns the raw provider as-is (useful if no transformation is required)
export const getLibrary = (provider) => {
  return provider;
};
