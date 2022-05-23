import React from 'react'
import { ethers } from 'ethers'
import Items from './Items'

import { useState } from 'react';
import { useEffect } from 'react';
import Token from '../utils/Token.json';
import { Link } from 'react-router-dom';

function Mint() {

  const [currentAccount, setCurrentAccount] = useState("");










  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have metamask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }

    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found");
    }
  }

  /*
  * Implement your connectWallet method here
  */
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

   
      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]); 
    } catch (error) {
      console.log(error);
    }
  }
 
  

  const askContractToMintNft = async () => {
    const CONTRACT_ADDRESS = "0x53117f4C7a264B4868742c17583b5900a243e981";
    try {
      const { ethereum } = window;
  
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, Token.abi, signer);
  
        console.log("Going to pop wallet now to pay gas...")

        let accounts = await ethereum.request({ method: "eth_requestAccounts" });
        let nftTxn = await connectedContract.mint(accounts[0], 1, 1 , 32 );
  
        console.log("Mining...please wait.")
        await nftTxn.wait();
        
        console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`);
  
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error)
    }
  
    }



  // Render Methods
  const renderNotConnectedContainer = () => (
    <button onClick={connectWallet} className="bg-zinc-200 font-medium rounded-md w-36 h-10">
      Connect Wallet
    </button>
  );

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);



  return (
    <div className='bg-gray-700 w-full h-full'>
      
         <div className='flex justify-center pt-10'>
      {currentAccount === "" ? (
            renderNotConnectedContainer()
          ) : (
            <div>
            <p className='text-3xl text-white'>
              CONNECTED
            </p>
            <button className='bg-white text-black' onClick={askContractToMintNft}>MINT</button>
            </div>
          )}
          
      </div>
    </div> 
  )
}

export default Mint