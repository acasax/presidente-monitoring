import React, { FC } from 'react';
import Screen from '../Screen';
import { NotFoundPageContainer, NotFoundPageText } from './style';

interface PageTestProps {
  test?: string;
}

const NotFoundPage: FC<PageTestProps> = () => (
  <Screen>
    <NotFoundPageContainer>
      <NotFoundPageText>Not found page</NotFoundPageText>
    </NotFoundPageContainer>
  </Screen>
);

export default NotFoundPage;
