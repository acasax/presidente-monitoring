import styled from 'styled-components';
import { Styles } from '../../constants/StyleContants';

export const NotFoundPageContainer = styled.div`
  background-color: ${Styles.Colors.LIGHT_BLUE};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NotFoundPageText = styled.h1`
    font-size: 100px;
    color: ${Styles.Colors.WHITE};
`;
