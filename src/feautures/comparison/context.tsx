import React, { createContext, ReactNode, useMemo } from 'react';
import { TComparisonPageContext } from './ComparisonModal';

export const ComparisonPageContext = createContext({} as TComparisonPageContext);

const ComparisonPageContextContainer = ({ children }: { children: ReactNode }) => {
  const exportData = useMemo(
    () => (
      {}),
    [],
  );
  return (
    <ComparisonPageContext.Provider value={exportData}>{children}</ComparisonPageContext.Provider>
  );
};

export default ComparisonPageContextContainer;
