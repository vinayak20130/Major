import Link from 'next/link';
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-bg">
      <nav className="navbar">
        <Link href="/Chart" passHref>
          <span className="navbar-link">
            Chart
          </span>
        </Link>
        <Link href="/Dashboard" passHref>
        <span className="navbar-link">            Home
          </span>
        </Link>
        <Link href="/Backtest" passHref>
          <span className="navbar-link">Backtest
          </span>
        </Link>
        <Link href="/News" passHref>
        <span className="navbar-link">            News
          </span>
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
