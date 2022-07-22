import React, { FC } from 'react';
import Screen from '../Screen';

interface PageTestProps {
  test?: string
}

const ComparisonPage: FC<PageTestProps> = () => (
  <Screen>
    <div className="_comparison-page">
      <p className="_text">Comparison</p>
    </div>
  </Screen>
);

export default ComparisonPage;
