// Modal.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Modal = ({ isOpen, onRequestClose }) => {
  const [selectedStock, setSelectedStock] = useState('');
  const [selectedStrategy, setSelectedStrategy] = useState('');
  const router = useRouter();

  if (!isOpen) return null;

  const handleBacktest = () => {
    onRequestClose();

    let filePath = '';
    if (selectedStock === 'Google' && selectedStrategy === 'SMA Cross') {
      filePath = '/strategies/SmaCross.html';
    } else if (selectedStock === 'Apple' && selectedStrategy === 'SMA Cross') {
      filePath = '/strategies/some-other-file.html'; // Adjust as needed
    }

    if (filePath) {
      window.location.href = filePath; // Redirect to the static HTML file
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-1/3">
        <button onClick={onRequestClose} className="float-right text-lg">X</button>
        
        <div>
          <select onChange={(e) => setSelectedStock(e.target.value)} className="p-2 border rounded">
            <option value="">Select Stock</option>
            <option value="Google">Google</option>
            <option value="Apple">Apple</option>
            {/* Add other stock options here */}
          </select>

          <select onChange={(e) => setSelectedStrategy(e.target.value)} className="p-2 border rounded mt-2">
            <option value="">Select Strategy</option>
            <option value="SMA Cross">SMA Cross</option>
            {/* Add other strategy options here */}
          </select>
        </div>

        <button 
          onClick={handleBacktest} 
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Backtest
        </button>
      </div>
    </div>
  );
};

export default Modal;
