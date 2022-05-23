import React from "react";
import Navbar from "./components/Navbar";
import Items from "./components/Items";
import Mint from "./components/Mint";
import { Routes, Route } from "react-router-dom";
import Buyred from "./pages/Buyred";
import Buyblue from "./pages/Buyblue";
import Buygreen from "./pages/Buygreen";
import Buypurple from "./pages/Buypurple";
import PayBlue from "./pages/PayBlue";
import PayGreen from "./pages/PayGreen";
import PayRed from "./pages/PayRed";
import PayPurple from "./pages/PayPurple";



function App() {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path='/' element={<Items />} />
         <Route path='checkout1' element={<Buyred />} />
         <Route path='checkout2' element={<Buygreen />} />
         <Route path='checkout3' element={<Buyblue />} />
         <Route path='checkout4' element={<Buypurple />} />
         <Route path='payred' element={<PayRed/>} />
         <Route path='payblue' element={<PayBlue/>} />
         <Route path='paygreen' element={<PayGreen/>} />
         <Route path='paypurple' element={<PayPurple/>} />

      </Routes>
      
      
    </div>
  );
}

export default App;
