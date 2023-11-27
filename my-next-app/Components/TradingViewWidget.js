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
        [
          "FX:EURUSD|1D"
        ],
        [
          "FX:GBPUSD|1D"
        ],
        [
          "FX_IDC:USDINR|1D"
        ]
        // Add more symbols as needed
      ],
      "chartOnly": false,
      "width": 1500,
      //1870
      "height": 845,
      "locale": "in",
      "colorTheme": "dark",
      "autosize": false,
      "showVolume": false,
      "showMA": false,
      "hideDateRanges": false,
      "hideMarketStatus": false,
      "hideSymbolLogo": false,
      "scalePosition": "right",
      "scaleMode": "Normal",
      "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
      "fontSize": "10",
      "noTimeScale": false,
      "valuesTracking": "1",
      "changeMode": "price-and-percent",
      "chartType": "area",
      "maLineColor": "#2962FF",
      "maLineWidth": 1,
      "maLength": 9,
      "lineWidth": 2,
      "lineType": 0,
      "dateRanges": [
        "1d|1",
        "1m|30",
        "3m|60",
        "12m|1D",
        "60m|1W",
        "all|1M"
      ]
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
