import React, { createContext, ReactNode, useEffect, useMemo, useState } from 'react';
import { TAppContext } from './feautures/main/MainModal';

export const AppContext = createContext({} as TAppContext);

const AppContextContainer = ({ children }: { children: ReactNode }) => {
  const [width, setWidth] = useState(0);

  const updateDimension = () => {
    const widthScreen = window.innerWidth;
    setWidth(widthScreen);
  };

  useEffect(() => {
    updateDimension();
  }, [updateDimension]);

  const exportData = useMemo(
    () => (
      {
        width,
      }),
    [
      width,
    ],
  );
  return (
    <AppContext.Provider value={exportData}>{children}</AppContext.Provider>
  );
};

export default AppContextContainer;
