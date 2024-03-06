import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a context to hold the size data
const SizeContext = createContext();

// Create a custom hook to access the size context
export const useSize = () => useContext(SizeContext);

// Create a provider component to wrap your application
export const SizeProvider = ({ children }) => {
  const [sizes, setSizes] = useState({
                                    width: window.innerWidth, 
                                    height: window.innerHeight,
                                    aspect: window.innerWidth / window.innerHeight,
                                    pixelRatio : Math.min(window.devicePixelRatio, 2),
                                    frustrum : 5
                                    });

  // Function to update sizes
    const handleResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const aspect = width / height;
        const pixelRatio = Math.min(window.devicePixelRatio, 2);
        const frustrum = 5;
        setSizes({ width, height, aspect,pixelRatio, frustrum });
    }
    useEffect(()=>{
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [sizes])
  

  return (
    <SizeContext.Provider value={{ sizes }}>
      {children}
    </SizeContext.Provider>
  );
};
