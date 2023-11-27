import React, { useEffect } from 'react';
import Script from 'next/script';

const NewsWidget = () => {
  useEffect(() => {
    const isBrowser = typeof window !== 'undefined';

    if (isBrowser) {
      try {
        new window.TradingView.widget({
          "container_id": "tradingview-widget-container__widget",
          "feedMode": "all_symbols",
          "colorTheme": "dark",
          "isTransparent": false,
          "displayMode": "adaptive",
          "width": "1280",
          "height": "1000",
          "locale": "in"
        });
      } catch (error) {
        console.error("Error initializing TradingView Widget:", error);
      }
    }
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div id="tradingview-widget-container__widget"></div>
      {/* Rest of your component */}
      <Script src="https://s3.tradingview.com/external-embedding/embed-widget-timeline.js" strategy="lazyOnload" />
    </div>
  );
};

export default NewsWidget;
