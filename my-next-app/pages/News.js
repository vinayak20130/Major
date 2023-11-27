import Navbar from '@/Components/Navbar';
import React from 'react';

const News = () => {
  const tradingViewWidget = {
    __html: `
      <!-- TradingView Widget BEGIN -->
      <div class="tradingview-widget-container">
        <div class="tradingview-widget-container__widget"></div>
        <div class="tradingview-widget-container__widget"></div>
        <div class="tradingview-widget-copyright">
          
        </div>
        <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-timeline.js" async>
          {
            "feedMode": "all_symbols",
            "colorTheme": "dark",
            "isTransparent": false,
            "displayMode": "adaptive",
            "width": "100%",
            "height": "1280",
            "locale": "in"
          }
        </script>
      </div>
      <!-- TradingView Widget END -->
    `,
  };

  return (
    <>
    <Navbar></Navbar>
    <div dangerouslySetInnerHTML={tradingViewWidget}></div>
    </>
  );
}

export default News;
