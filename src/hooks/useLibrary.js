import { Web3Provider } from "@ethersproject/providers";

export const getLibraryForSign = (provider) => {
  const library = new Web3Provider(provider);
  console.log("Library : ", library);
  return library;
};

export const getLibrary = (provider) => {
  return provider;
};
