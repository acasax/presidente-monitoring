import React, { FC } from 'react';
import Screen from '../Screen';

interface PageTestProps {
  test?: string;
}

const NotFoundPage: FC<PageTestProps> = () => (
  <Screen>
    <div className="_not-found-page">
      <h1 className="_text">Not found page</h1>
    </div>
  </Screen>
);

export default NotFoundPage;
