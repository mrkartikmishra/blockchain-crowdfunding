import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ethers } from "ethers";

const Wallet = () => {
  const [currentAddress, setCurrentAddress] = useState("");
  const [balance, setBalance] = useState("");
  const [connected, setConnected] = useState(false);

  const connectWalletHandler = async () => {
    if (!connected || !window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accBalance = await provider.getBalance(accounts[0]);
      const formatedBalance = ethers.utils.formatEther(accBalance);
      console.log(accounts[0]);
      setConnected(true);
      setCurrentAddress(accounts[0]);
      setBalance(formatedBalance);
    }
  };

  return (
    <ConnectWalletWrapper>
      {connected && currentAddress ? (
        <p>
          {balance.slice(0, 4)} ETH {currentAddress.slice(0, 6)}...{" "}
          {currentAddress.slice(39)}
        </p>
      ) : (
        <button onClick={() => connectWalletHandler()}>Connect Wallet</button>
      )}
    </ConnectWalletWrapper>
  );
};

const ConnectWalletWrapper = styled.div`
  font-family: "roboto";
  margin: 5px;
  height: 10%;
  cursor: pointer;
  background-color: ${(props) => props.theme.bgDiv};
  display: flex;
  align-items: center;
  border-radius: 7px;
  padding: 0px 2px 0px 2px;
  font-weight: 600;
`;

export default Wallet;
