import { useWeb3React } from "@web3-react/core";
import React, { useState } from "react";
import abi from "./utils/contractAbi.json";
import Contracts from "./utils/Environment";
import useWeb3 from "./hooks/useWeb3.js";
import Web3 from "web3";

const ContractCall = () => {
  const [owner, setOwner] = useState("Click on button to find out");
  const { account, chainId } = useWeb3React();

  console.log("Checking", account, chainId);

  const getOwner = async () => {
    try {
      const web3 = new Web3(
        "https://falling-crimson-theorem.quiknode.pro/7eb0fe960ec24169b7b4254f66a5d801d0c35da1/"
      );
      const polygonContractAddress = Contracts.PolygonContract;
      console.log("polygonContractAddress", abi);
      const contract = web3.eth.Contract(abi, polygonContractAddress);
      console.log(contract.methods.owner, "owner");
      const result = await contract.methods?.owner().call();

      console.log("Owner Raw Result:", result); // Log raw result for inspection
      return result;
    } catch (error) {
      console.error("Error fetching owner in  getOwner()", error);
    }
  };

  const contractCall = async () => {
    try {
      const result = await getOwner();
      console.log("Owner Address: ", result); // Log the decoded result
      setOwner(result);
    } catch (error) {
      console.error("Error fetching owner", error);
    }
  };

  // const getUSDTAddress = async () => {
  //   try {
  //     const result = await contract.methods.USDT().call();
  //     console.log("USDT Address:", result);
  //   } catch (error) {
  //     console.error("Error fetching USDT address:", error);
  //   }
  // };

  return (
    <div className="callContract">
      <h2>Create Contract Call</h2>
      <h3>Owner is: {owner}</h3>
      <button onClick={contractCall}>Get Owner</button>
    </div>
  );
};

export default ContractCall;
