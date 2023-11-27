import React from 'react'
import  { useEffect, useRef } from 'react';

const Calander = () => {
 
    const containerRef = useRef(null);

    useEffect(() => {
      // Create a script element
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-events.js';
      script.async = true;
      script.type = 'text/javascript';
      script.innerHTML = JSON.stringify({
        "colorTheme": "dark",
        "isTransparent": false,
        "width": "510",
        "height": "845",
        "locale": "in",
        "importanceFilter": "-1,0,1",
        "countryFilter": "us,eu,it,nz,ch,au,fr,jp,za,tr,ca,de,mx,es,gb"
      });
  
      // Append the script to the container
      containerRef.current.appendChild(script);
  
      // Clean up the script when the component unmounts
      return () => {
        if (containerRef.current) {
          containerRef.current.removeChild(script);
        }
      };
    }, []);
  
    return (
      <div className="tradingview-widget-container" ref={containerRef}>
        {/* Static HTML content */}
        <div className="tradingview-widget-container__widget"></div>
        <div className="tradingview-widget-copyright">
          
        </div>
      </div>
  );
}

export default Calander