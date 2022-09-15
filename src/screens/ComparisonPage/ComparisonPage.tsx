import React from 'react';
import ComparisonPageContextContainer from '../../feautures/comparison/context';
import ComparisonPageView from './ComparisonPageView';

const ComparisonPage = () => (
  <ComparisonPageContextContainer>
    <ComparisonPageView />
  </ComparisonPageContextContainer>
);

export default ComparisonPage;
