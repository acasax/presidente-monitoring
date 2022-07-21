import styled from 'styled-components';
import { Styles } from '../../constants/StyleContants';

export const AuthPageContainer = styled.div`
  background-color: ${Styles.Colors.LIGHT_BLUE};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AuthFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const AuthFormLabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const AuthFormLabelText = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  color: ${Styles.Colors.WHITE};
`;
