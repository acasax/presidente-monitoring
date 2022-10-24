import React, { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, FormControl, FormHelperText, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useHistory } from 'react-router-dom';
import Screen from '../Screen';
import { useLoading } from '../../hooks/UseLoading';
import { useAppDispatch } from '../../store/hooks';
import { Login } from '../../feautures/auth/AuthServices';
import { clearUser, setUser } from '../../feautures/auth/authSlice';
import { clearAlertMsg, setAlertMsg, setAlertOpenStatus, setAlertStatus } from '../../components/CustomAlert/alertSlice';
import { MAIN_PATH } from '../../routes/path-constants';
import { AlertStatus, AuthPageControllersNames } from '../../utils/Constants';
import { Texts } from '../../utils/Texts';

interface PageTestProps {
  test?: string;
}

const AuthPage: FC<PageTestProps> = () => {
  const {
    handleSubmit,
    control,
  } = useForm();
  const history = useHistory();

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
        dispatch(setAlertStatus(AlertStatus.Error));
        dispatch(setAlertMsg(res?.message));
        dispatch(setAlertOpenStatus(true));
      } else {
        dispatch(setUser(res));
        history.push(MAIN_PATH);
        dispatch(setAlertOpenStatus(false));
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
            <p className="_text">{Texts.userName}</p>
          </div>
          <Controller
            name={AuthPageControllersNames.USERNAME}
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
                  id={AuthPageControllersNames.USERNAME}
                  type="text"
                  fullWidth
                  className={error ? '_input _input-error' : '_input'}
                  error={!!error}
                  onChange={onChange}
                  value={value}
                  endAdornment={<PersonOutlineIcon />}
                  placeholder={Texts.userNamePlaceholder}
                />
                <FormHelperText
                  id={AuthPageControllersNames.USERNAME}
                  className="_error-text"
                >
                  {error ? error.message : ''}
                </FormHelperText>
              </FormControl>
            )}
            rules={{
              required: Texts.userNameRequiredValidationError,
              minLength: { value: 5, message: Texts.userNameMinLengthValidationError },
            }}
          />
          <div className="_label-container">
            <p className="_text">{Texts.password}</p>
          </div>
          <Controller
            name={AuthPageControllersNames.PASSWORD}
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
                  id={AuthPageControllersNames.PASSWORD}
                  type={showPassword ? 'text' : 'password'}
                  value={value}
                  fullWidth
                  className={error ? '_input _input-error' : '_input'}
                  onChange={onChange}
                  endAdornment={(
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={Texts.passwordVisibility}
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
                  placeholder={Texts.passwordVisibility}
                />
                <FormHelperText
                  id={AuthPageControllersNames.PASSWORD}
                  className="_error-text"
                >
                  {error ? error.message : ''}
                </FormHelperText>
              </FormControl>
            )}
            rules={{
              required: Texts.passwordRequiredValidationError,
              minLength: { value: 5, message: Texts.passwordMinLengthValidationError },
            }}
          />
          <div className="_button-container">
            <Button variant="outlined" className="_button" type="submit">
              {Texts.login}
            </Button>
          </div>

        </form>
      </div>
    </Screen>
  );
};

export default AuthPage;
