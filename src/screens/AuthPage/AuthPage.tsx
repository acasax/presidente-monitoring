import React, { FC } from 'react';
import { FormControl, OutlinedInput } from '@mui/material';
import Screen from '../Screen';
import { AuthFormContainer, AuthFormLabelContainer, AuthFormLabelText, AuthPageContainer } from './style';

interface PageTestProps {
  test?: string;
}

const AuthPage: FC<PageTestProps> = () => (
  <Screen>
    <AuthPageContainer>
      <AuthFormContainer>
        <AuthFormLabelContainer>
          <AuthFormLabelText>
            Korisničko ime
          </AuthFormLabelText>
        </AuthFormLabelContainer>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
              // value={values.weight}
              // onChange={handleChange('weight')}
              // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
        </FormControl>
      </AuthFormContainer>
    </AuthPageContainer>
  </Screen>
);

export default AuthPage;
