import React, { useState } from 'react';
import { ethers } from 'ethers';

const Wallet = () => {
  const [currentAddress, setCurrentAddress] = useState('');
  const [connected, setConnected] = useState(false);

  const connectWalletHandler = async () => {
    if(!connected || !window.ethereum) {
        const accounts = await window.ethereum.request({method: "eth_requestAccounts"});
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const balance = await provider.getBalance(accounts[0]);
        console.log(accounts[0]);
        setConnected(true);
        setCurrentAddress(accounts[0]);
    }
  }

  return (
    <div>
        {(connected && currentAddress) ? (
            <p>{currentAddress}</p>
        ) : (
            <button onClick={() =>connectWalletHandler()}>Connect Wallet</button>
        )}
    </div>
  )
}

export default Wallet