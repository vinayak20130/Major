// Navbar.js
import React, { useState } from 'react';
import Link from 'next/link';
import Modal from './Modal';
import Dropdown from './Dropdown';
import './Navbar.css';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const stocks = [{ label: 'Apple', value: 'AAPL' }, { label: 'Google', value: 'GOOGL' }];
  const strategies = [{ label: 'SmaCross', value: 'A' }, { label: 'Strategy B', value: 'B' }];

  const handleBacktestClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <div className="navbar-bg">
      <nav className="navbar">
        <Link href="/Dashboard" passHref>
          <span className="navbar-link">Home</span>
        </Link>
        <Link href="/Chart" passHref>
          <span className="navbar-link">Chart</span>
        </Link>
        <span className="navbar-link" onClick={handleBacktestClick}>Backtest</span>
        <Link href="/News" passHref>
          <span className="navbar-link">News</span>
        </Link>
      </nav>

      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
        <div className="flex flex-col space-y-4">
          <Dropdown options={stocks} placeholder="Select Stock" />
          <Dropdown options={strategies} placeholder="Select Strategy" />
        </div>
      </Modal>
    </div>
  );
}

export default Navbar;
