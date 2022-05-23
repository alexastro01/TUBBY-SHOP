import React from "react";
import { useState, useEffect } from "react";
import barbat from "../assets/barbat.jpg";
import photo from "../assets/photo.png";
import redT from "../assets/red.png";
import greenT from "../assets/green.png";
import blueT from "../assets/blue.png";
import purpleT from "../assets/purple.png";
import { ethers } from "ethers";
import { Link, useNavigate } from "react-router-dom";
import Buyred from "../pages/Buyred";
import Buyblue from "../pages/Buyblue";
import Buypurple from "../pages/Buypurple";
import Buygreen from "../pages/Buygreen";

const clothes = [
  {
    id: 1,
    color: "Red",
    sold: false,
    image: redT,
    quantity: 2,
    path: "checkout1",
  },
  {
    id: 2,
    color: "Green",
    sold: false,
    image: greenT,
    quantity: 2,
    path: "checkout2",
  },
  {
    id: 3,
    color: "Blue",
    sold: false,
    image: blueT,
    quantity: 2,
    path: "checkout3",
  },
  {
    id: 4,
    color: "Purple",
    sold: false,
    image: purpleT,
    quantity: 2,
    path: "checkout4",
  },
];

const color = clothes.color;
const sold = clothes.sold;
const image = clothes.image;

function Items() {
  const [currentAccount, setCurrentAccount] = useState("");
  const [amount, setAmount] = useState(clothes.quantity);

  console.log(clothes);

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have metamask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found");
    }
  };

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

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  // Render Methods
  const renderNotConnectedContainer = () => (
    <button
      onClick={connectWallet}
      className="bg-zinc-200 font-medium rounded-md w-36 h-10"
    >
      Connect Wallet
    </button>
  );

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <div className="bg-gray-700">
      <div className="items-center grid grid-rows-4 sm:flex columns-4 h-full w-full  justify-center pt-2 bg-gray-700 ">
        {clothes.map(({ color, sold, image, path }) => (
          <div className="align-center items-center px-5 pt-20 ">
            <img
              src={image}
              alt=""
              className=" w-[300px] h-[300px] sm:w-[300px] h-[300px] rounded-md shadow-lg hover:scale-110 transition-transform"
            />
            <p className="font-medium align-center text-center pt-6 text-white">
              {" "}
              Tubby {color} T-shirt{" "}
            </p>

            <Link to={path}>
              <button className="font-bold text-green-700 bg-white h-10 w-20 ml-[105px] mt-3 rounded-md hover:scale-110 transition-transform ">
                BUY
              </button>
            </Link>

            
            <div className="bg-gray-700 h-[400px] w-full"></div>
          </div>
        ))}
        ;
      </div>
    </div>
  );
}

export default Items;
