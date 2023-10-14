import React, { createContext, useState } from 'react';

export const StatusContext = createContext();

export const StatusProvider = ({ children }) => {
  const [statusDisableStep2, setStatusDisableStep2] = useState(true);

  return (
    <StatusContext.Provider
      value={{ statusDisableStep2, setStatusDisableStep2 }}
    >
      {children}
    </StatusContext.Provider>
  );
};
