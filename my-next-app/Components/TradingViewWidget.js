"use client"
import { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef(null);

  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js';
    script.async = true;
    script.type = 'text/javascript';

    // Set your TradingView widget configuration here
    script.innerHTML = JSON.stringify({
      "symbols": [
        ["Apple", "AAPL|1D"],
        ["Google", "GOOGL|1D"],
        ["Microsoft", "MSFT|1D"],
        // Add more symbols as needed
      ],
      "chartOnly": false,
      "width": 1600,
      //1870
      "height": 845,
      // Other configurations...
    });

    // Append the script to the container
    container.current.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      if (container.current) {
        container.current.removeChild(script);
      }
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
       
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
