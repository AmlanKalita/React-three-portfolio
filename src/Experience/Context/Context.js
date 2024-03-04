// MyContext.js
import React, { createContext, useContext, useState } from 'react';

// Create a context
const MyContext = createContext();

// Provider component
export const MyProvider = ({ children }) => {
  const [position, setPosition] = useState('');

  return (
    <MyContext.Provider value={{position, setPosition }}>
      {children}
    </MyContext.Provider>
  );
};

// Custom hook to consume the context
export const useGlobalValue = () => useContext(MyContext);
