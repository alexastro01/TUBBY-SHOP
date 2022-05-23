import React from 'react'
import redT from '../assets/red.png';
import { useState } from 'react';
import { useEffect } from 'react';
import Token from '../utils/Token.json';
import { ethers } from 'ethers';
import loading from '../assets/loading.jpg'
import { utils } from 'ethers';




function PayRed  ()  {

  const [currentAccount, setCurrentAccount] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [purchased, setPurchased] = useState (false);










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
        
        let nftTxn = await connectedContract.mint(accounts[0], 1, 1 , 32, { value: utils.parseEther('0.009'), gasLimit: 50000 } );
       
        console.log("Mining...please wait.")
        setIsLoading(true);
        setPurchased(true);
        await nftTxn.wait();
        setIsLoading(false);
        setPurchased(false);
        
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
    <button onClick={connectWallet} className="bg-zinc-200 font-medium rounded-md w-36 h-10 mx-[75px]">
      Connect Wallet
    </button>
  );

  const RenderPurchaseProcess = () => (
    <div>
      {isLoading && <p>Opening Metamask</p>}
    </div>
  );




  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);



  return (
    <div className='bg-gray-700 pt-7 h-[700px] '>

      <img src={redT} className='h-[400px] w-[400px] m-auto sm:mr-32  sm:h-[600px] sm:w-[600px]  bg-gray-700 sm:float-left rounded-xl   sm:ml-32 hover:scale-110 transition-transform  ' alt='./'/>
      
         <div className=' flex justify-center mt-9  sm:grid sm:pl-2 sm:pr-[150px] sm:pt-[200px] '>
      {currentAccount === "" ? (
            renderNotConnectedContainer()
          ) : (
            <div className='float-right '>
            <p className='text-3xl text-white font-bold '>
              CONNECTED
            </p>
            <button className='bg-white text-black w-20 h-10 rounded-md font-medium mt-4 ml-[45px] hover:scale-110 transition-transform' onClick={askContractToMintNft}>PAY</button>
            {isLoading ? <p className='text-white font-bold animate-bounce mt-10'></p> : <p className='text-green-500 font-bold  ml-7 pt-4'>✔️ Sucessfull</p>}
            {purchased && <img src={loading} alt='.//' className='w-10 h-10 ml-[65px]'/>}
            </div>
          )};
        
         
      </div>
      <div>
    
      </div>
    </div> 
  )
}

export default PayRed