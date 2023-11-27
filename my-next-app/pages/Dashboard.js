import React from 'react';
import Navbar from '@/Components/Navbar';
import TickerTape from '@/Components/TickerTape';
import TradingViewWidget from '@/Components/TradingViewWidget';
import Calander from '@/Components/Calander';

const Dashboard = () => {
  return (
    <div className="relative">
      <Navbar className="sticky top-0 z-10" />
      <TickerTape className="z-0" />
      
      <div className="flex"> {/* Flex container */}
        <TradingViewWidget />
        <Calander />
      </div>
    </div>
  );
};

export default Dashboard;
