// Import necessary components
import React from 'react';
import Navbar from '@/Components/Navbar';
import TickerTape from '@/Components/TickerTape';
import TradingViewWidget from '@/Components/TradingViewWidget'; // Import the TradingViewWidget

const Dashboard = () => {
  return (
    <div className="relative">
    
      <Navbar className="sticky top-0 z-10" /> 
      <TickerTape className="z-0" />         
      <TradingViewWidget />  
    </div>
  );
};

export default Dashboard;
