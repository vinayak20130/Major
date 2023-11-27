import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';

export default function AdvanceViewWidget() {
  const containerId = "tradingview_160a7";
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    if (isScriptLoaded) {
      createWidget();
    }

    function createWidget() {
      if ('TradingView' in window) {
        new window.TradingView.widget({
          autosize: true,
          symbol: "NASDAQ:AAPL",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "1",
          locale: "in",
          enable_publishing: false,
          hide_side_toolbar: false,
          allow_symbol_change: true,
          container_id: containerId
        });
      }
    }
  }, [isScriptLoaded]);

  return (
    <div className='tradingview-widget-container' style={{ height: "98vh", width: "98vw" }}>
      <div id={containerId} style={{ height: "98vh", width: "98vw" }} />
      
      <Script
        src="https://s3.tradingview.com/tv.js"
        strategy="lazyOnload"
        onLoad={() => setIsScriptLoaded(true)}
      />
    </div>
  );
}
