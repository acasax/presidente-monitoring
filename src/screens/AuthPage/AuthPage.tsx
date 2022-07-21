import React, { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, FormControl, FormHelperText, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Screen from '../Screen';
import { useLoading } from '../../hooks/UseLoading';
import { useAppDispatch } from '../../store/hooks';
import { Login } from '../../feautures/auth/AuthServices';
import { clearUser, setUser } from '../../feautures/auth/authSlice';
import { clearAlertMsg, setAlertMsg, setAlertStatus } from '../../components/CustomAlert/alertSlice';

interface PageTestProps {
  test?: string;
}

const AuthPage: FC<PageTestProps> = () => {
  const {
    handleSubmit,
    control,
  } = useForm();

  // const history = useHistory();

  const {
    setLoading,
    resetLoading,
  } = useLoading();

  const [showPassword, setShowPassword] = React.useState(
    false,
  );

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const dispatch = useAppDispatch();

  const onSubmit = async (data: any) => {
    setLoading();
    try {
      dispatch(clearUser());
      const res = await Login(data);
      if (res?.message) {
        dispatch(setAlertMsg(res?.message));
        dispatch(setAlertStatus(true));
      } else {
        dispatch(setUser(res));
        dispatch(setAlertStatus(false));
        dispatch(clearAlertMsg());
      }
    } catch (e) {
      console.log(e);
    } finally {
      resetLoading();
    }
  };

  return (
    <Screen>
      <div className="_auth-page">
        <form className="_form_container" onSubmit={handleSubmit(onSubmit)}>
          <div className="_label-container">
            <p className="_text">Korisnicko ime</p>
          </div>
          <Controller
            name="username"
            control={control}
            defaultValue=""
            render={({
              field: {
                onChange,
                value,
              },
              fieldState: { error },
            }) => (
              <FormControl
                sx={{
                  width: '100%',
                }}
                variant="standard"
              >
                <OutlinedInput
                  id="username"
                  type="text"
                  fullWidth
                  className={error ? '_input _input-error' : '_input'}
                  error={!!error}
                  onChange={onChange}
                  value={value}
                  endAdornment={<PersonOutlineIcon />}
                  placeholder="Unesi korisnicko ime"
                />
                <FormHelperText
                  id="username"
                  className="_error-text"
                >
                  {error ? error.message : ''}
                </FormHelperText>
              </FormControl>
            )}
            rules={{
              required: 'Polje korisnicko ime je obavezno.',
              minLength: { value: 5, message: 'Korisnicko ime mora biti duze od 5 karaktera' },
            }}
          />
          <div className="_label-container">
            <p className="_text">Lozinka</p>
          </div>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({
              field: {
                onChange,
                value,
              },
              fieldState: { error },
            }) => (
              <FormControl
                sx={{ width: '100%' }}
                variant="standard"
              >
                <OutlinedInput
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={value}
                  fullWidth
                  className={error ? '_input _input-error' : '_input'}
                  onChange={onChange}
                  endAdornment={(
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Vidljivost lozinke"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword
                          ? <VisibilityOff className="_icon" />
                          : <Visibility className="_icon" />}
                      </IconButton>
                    </InputAdornment>
                                    )}
                  error={!!error}
                  placeholder="Unesi lozinku"
                />
                <FormHelperText
                  id="password"
                  className="_error-text"
                >
                  {error ? error.message : ''}
                </FormHelperText>
              </FormControl>
            )}
            rules={{
              required: 'Polje loznika je obavezno',
              minLength: { value: 5, message: 'Lozinka mora biti duza od 5 karaktera' },
            }}
          />
          <div className="_button-container">
            <Button variant="outlined" className="_button" type="submit">
              PRIJAVA
            </Button>
          </div>

        </form>
      </div>
    </Screen>
  );
};

export default AuthPage;
