import React, { FC } from 'react';
import Screen from '../Screen';

interface PageTestProps {
  test?: string;
}

const CounterPage: FC<PageTestProps> = () => (
  <Screen>
    <div>
      <p>asd</p>
    </div>
  </Screen>
);

export default CounterPage;
