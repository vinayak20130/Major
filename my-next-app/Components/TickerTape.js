import React, { useEffect,useRef } from 'react';

const TickerTape = () => {
    const container = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
        script.async = true;
        script.innerHTML = JSON.stringify({
            "symbols": [
                {"proName": "FOREXCOM:SPXUSD", "title": "S&P 500"},
                {"proName": "FOREXCOM:NSXUSD", "title": "US 100"},
                {"proName": "FX_IDC:EURUSD", "title": "EUR to USD"},
                {"proName": "BITSTAMP:BTCUSD", "title": "Bitcoin"},
                {"proName": "BITSTAMP:ETHUSD", "title": "Ethereum"},
                {"proName": "GBP to USD*","proName": "FX:GBPUSD"},
                {
                "proName": "AUD to USD*",
                "proName": "FX:AUDUSD"
              },
              {
                "proName": "EUR to JPY*",
                "proName": "FX:EURJPY"
              }
            ],
            "showSymbolLogo": true,
            "colorTheme": "dark",
            "isTransparent": true,
            "displayMode": "adaptive",
            "locale": "in"
        });

        container.current.appendChild(script);

        return () => {
            if (container.current) {
                container.current.removeChild(script);
            }        }
    }, []);

    return (
        <div className="tradingview-widget-container" ref={container}>
           
           
        </div>
    );
};

export default TickerTape;
