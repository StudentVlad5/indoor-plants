import React, { createContext, useState } from 'react';
import { getFromStorage, saveToStorage } from 'services/localStorService';
import uuid4 from 'uuid4';

export const StatusContext = createContext();

export const StatusProvider = ({ children }) => {
  const [userAnonimusID, setUserAnonimusID] = useState(
    getFromStorage('userAnonimusID')
      ? getFromStorage('userAnonimusID')
      : uuid4(),
  );
  if (!getFromStorage('userAnonimusID')) {
    saveToStorage('userAnonimusID', userAnonimusID);
  }
  return (
    <StatusContext.Provider value={{ userAnonimusID, setUserAnonimusID }}>
      {children}
    </StatusContext.Provider>
  );
};
